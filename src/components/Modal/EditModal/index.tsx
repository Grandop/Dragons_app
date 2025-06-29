import { Modal } from "..";
import * as S from "./styles";
import { useEditModal } from "../hooks/useEditModal";
import { Dragon } from "../../../entities/dragon";
import { Input } from "../../Input";
import { TextArea } from "../../TextArea";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  dragonSelected: Dragon | null;
}

export const EditModal = ({
  isOpen,
  onClose,
  dragonSelected
}: EditModalProps) => {
  const { handleSubmit, handleFormSubmit, register, errors, watch, isEditing } =
    useEditModal(onClose, dragonSelected);

  const watchedImageUrl = watch("imageUrl");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleSubmit(handleFormSubmit)}
      title="Editar Dragão"
      confirmText="Editar"
      cancelText="Cancelar"
      confirmLoading={isEditing}
    >
      <S.FormContainer>
        <S.FormGroup>
          <Input
            label="Nome do Dragão"
            id="name"
            placeholder="Vhagar"
            {...register("name")}
            error={errors.name}
            variant="dark"
          />
        </S.FormGroup>

        <S.FormGroup>
          <Input
            label="Tipo do Dragão"
            id="type"
            placeholder="Dragão de Fogo"
            {...register("type")}
            error={errors.name}
            variant="dark"
          />
        </S.FormGroup>

        <S.FormGroup>
          <Input
            id="imageUrl"
            label="URL da Imagem"
            type="url"
            placeholder="https://exemplo.com/dragao.jpg"
            {...register("imageUrl")}
            variant="dark"
            error={errors.imageUrl}
          />

          {watchedImageUrl && (
            <S.ImagePreview>
              <S.PreviewImage
                src={watchedImageUrl}
                alt="Preview do dragão"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </S.ImagePreview>
          )}
        </S.FormGroup>

        <S.FormGroup>
          <TextArea
            id="histories"
            label="História ou Descrição"
            placeholder="Conte a história deste dragão... Suas origens, poderes, lendas e características únicas..."
            register={register("histories")}
            error={errors.histories}
          />
        </S.FormGroup>
      </S.FormContainer>
    </Modal>
  );
};
