import * as S from "./styles";
import { useDragonList } from "../../hooks/useDragonList";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { Typography } from "../../../../components/Typography";
import { Dragon } from "../../../../entities/dragon";
import { RemoveModal } from "../RemoveModal";

interface DragonListProps {
  dragons: Dragon[] | undefined;
}

export const DragonList = ({ dragons }: DragonListProps) => {
  const {
    isEditModalOpen,
    isRemoveModalOpen,
    setEditIsModalOpen,
    setRemoveIsModalOpen,
    sortedDragons,
    dragonSelectd,
    handleDragonClicked,
    theme
  } = useDragonList(dragons);

  return (
    <S.Grid>
      {sortedDragons?.map((dragon) => (
        <S.Card key={dragon.id}>
          <S.CardHeader>
            {dragon.imageUrl ? (
              <S.DragonIcon src={dragon.imageUrl} />
            ) : (
              <S.EmptyDragonIcon />
            )}

            <Typography
              color={theme.colors.neutral[0]}
              fontSize="heading5"
              fontWeight="bold"
            >
              {dragon.name}
            </Typography>
          </S.CardHeader>

          <S.Description>
            {dragon.histories.length > 0
              ? dragon.histories
              : "Nenhuma descrição encontrada."}
          </S.Description>

          <S.Footer>
            <Button
              loaderColor="white"
              backgroundColor={theme.colors.neutral[800]}
              height="20px"
              width="90px"
              onClick={() => handleDragonClicked(dragon, "remove")}
            >
              Remover
            </Button>
            <Button
              loaderColor="white"
              backgroundColor={theme.colors.red[100]}
              height="20px"
              width="70px"
              onClick={() => handleDragonClicked(dragon, "edit")}
            >
              Editar
            </Button>
          </S.Footer>
        </S.Card>
      ))}
      {isRemoveModalOpen && (
        <RemoveModal
          onClose={() => setRemoveIsModalOpen(false)}
          isOpen={isRemoveModalOpen}
          dragonSelected={dragonSelectd}
        />
      )}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setEditIsModalOpen(false)}
        onConfirm={() => {
          console.log("Confirmado!");
          setEditIsModalOpen(false);
        }}
        title="Editar Dragão"
        confirmText="Editar"
        cancelText="Cancelar"
      >
        <Typography color={theme.colors.neutral[0]} fontSize="p2">
          edicao
        </Typography>
      </Modal>
    </S.Grid>
  );
};
