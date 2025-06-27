import { IoClose } from "react-icons/io5";
import * as S from "./styles";
import { useTheme } from "styled-components";
import { Button } from "../Button";
import { Loader } from "../Loader";
import { Typography } from "../Typography";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  confirmDisabled = false,
  confirmLoading = false
}: ModalProps) => {
  const theme = useTheme();
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (!confirmDisabled && !confirmLoading) {
      onConfirm();
    }
  };

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContainer>
        <S.CloseButton onClick={onClose}>
          <IoClose />
        </S.CloseButton>

        <S.ModalHeader>
          <Typography
            fontSize="heading1"
            color={theme.colors.neutral[0]}
            fontWeight="semibold"
          >
            {title}
          </Typography>
        </S.ModalHeader>

        <S.ModalBody>{children}</S.ModalBody>

        <S.ModalFooter>
          <Button
            backgroundColor={theme.colors.neutral[800]}
            width="100px"
            onClick={onClose}
          >
            {cancelText}
          </Button>
          <Button
            backgroundColor={theme.colors.red[100]}
            width="100px"
            onClick={handleConfirm}
          >
            {confirmLoading ? <Loader variant="white" /> : confirmText}
          </Button>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
