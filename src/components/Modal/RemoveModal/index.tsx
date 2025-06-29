import { Modal } from "..";
import { Dragon } from "@entities/dragon";
import { useTheme } from "styled-components";
import { useRemoveModal } from "../hooks/useRemoveModal";
import { Typography } from "@components/Typography";

interface RemoveModalProps {
  isOpen: boolean;
  onClose: () => void;
  dragonSelected: Dragon | null;
}

export const RemoveModal = ({
  isOpen,
  onClose,
  dragonSelected
}: RemoveModalProps) => {
  const { handleRemoveDragon, isDeleting } = useRemoveModal(onClose);
  const theme = useTheme();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => handleRemoveDragon(dragonSelected?.id || "")}
      title="Remover Dragão"
      confirmText="Remover"
      cancelText="Cancelar"
      confirmLoading={isDeleting}
    >
      <Typography color={theme.colors.neutral[0]} fontSize="p2">
        Tem certeza que deseja remover este dragão? Esta ação não pode ser
        desfeita.
      </Typography>
    </Modal>
  );
};
