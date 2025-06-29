import { styled } from "styled-components";

interface AvatarContainerProps {
  $width?: string;
  $height?: string;
  $border?: boolean;
}

export const AvatarContainer = styled.div<AvatarContainerProps>`
  width: ${({ $width }) => $width || "120px"};
  height: ${({ $height }) => $height || "120px"};
  border-radius: 50%;
  border: ${({ $border, theme }) =>
    $border ? `4px solid ${theme.colors.red[100]}` : "none"};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.neutral[300]};
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
