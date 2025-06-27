import { styled } from "styled-components";
import { theme } from "../../theme";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p2};
  color: ${({ theme }) => theme.colors.neutral[500]};
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const InputContainer = styled.div<{ $hasError: boolean }>`
  position: relative;
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[100] : theme.colors.neutral[100]};
  border-radius: ${theme.borderRadius.xs};
  transition: border-color 0.3s;
  display: flex;
  align-items: center;

  &:focus-within {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[200] : theme.colors.neutral[200]};
  }
`;

export const Input = styled.input<{
  $hasIcon: boolean;
  $hasError: boolean;
  $placeholderColor: string;
}>`
  width: 100%;
  padding: ${({ $hasIcon }) =>
    $hasIcon ? "12px 16px 12px 40px" : "12px 16px"};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.red[100] : theme.colors.neutral[100]};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p2};
  transition: border-color 0.3s;
  color: ${({ theme }) => theme.colors.neutral[500]};

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.red[200] : theme.colors.neutral[200]};
  }

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 12px;
  color: ${theme.colors.neutral[300]};
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[100]};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p1};
  margin-top: 5px;
`;
