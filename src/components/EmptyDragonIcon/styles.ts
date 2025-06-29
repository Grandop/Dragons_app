import { SiDragonframe } from "react-icons/si";
import { styled } from "styled-components";

export const EmptyDragonIcon = styled(SiDragonframe)`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  color: ${({ theme }) => theme.colors.neutral[200]};
`;
