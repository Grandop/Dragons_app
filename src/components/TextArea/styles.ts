import { styled } from "styled-components";

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
  background: ${({ theme }) => theme.colors.neutral[600]};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.red[100] : theme.colors.neutral[100]};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.neutral[100]};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.red[100]}33;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[300]};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[100]};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p1};
  margin-top: 5px;
`;
