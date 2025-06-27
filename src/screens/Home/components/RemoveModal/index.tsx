import { useTheme } from "styled-components";
import { useRemoveModal } from "../../hooks/useRemoveModal";
import { Modal } from "../../../../components/Modal";
import { Typography } from "../../../../components/Typography";
import { Dragon } from "../../../../entities/dragon";

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
  const { handleRemoveDragon } = useRemoveModal();
  const theme = useTheme();

  console.log("RemoveModal", dragonSelected);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => {
        handleRemoveDragon(dragonSelected?.id || "");
        onClose();
      }}
      title="Remover Dragão"
      confirmText="Remover"
      cancelText="Cancelar"
    >
      <Typography color={theme.colors.neutral[0]} fontSize="p2">
        Tem certeza que deseja remover este dragão? Esta ação não pode ser
        desfeita.
      </Typography>
    </Modal>
  );
};
