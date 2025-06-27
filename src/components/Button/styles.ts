import { styled } from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.neutral[700]};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p2};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[400]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral[300]};
    cursor: not-allowed;
  }
`;
