import { css, styled } from "styled-components";
import { theme } from "../../theme";

const modifiers = {
  hasErrorsBorder: () => css`
    border-color: ${({ theme }) => theme.colors.red[100]};
  `,
  darkBorder: () => css`
    border-color: ${({ theme }) => theme.colors.neutral[400]};
  `,
  lightBorder: () => css`
    border-color: ${({ theme }) => theme.colors.neutral[200]};
  `
};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.label<{ $variant: "dark" | "light" }>`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p2};
  color: ${({ theme, $variant }) =>
    $variant === "dark" ? theme.colors.neutral[0] : theme.colors.neutral[500]};
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const InputContainer = styled.div<{
  $hasError: boolean;
  $variant: "dark" | "light";
}>`
  position: relative;
  border: 1px solid;

  ${({ $hasError }) => $hasError && modifiers.hasErrorsBorder()}
  ${({ $variant }) =>
    $variant === "dark" ? modifiers.darkBorder : modifiers.lightBorder}

  border-radius: ${theme.borderRadius.xs};
  transition: border-color 0.3s;
  display: flex;
  align-items: center;

  &:focus-within {
    ${({ $hasError }) => $hasError && modifiers.hasErrorsBorder()}
    ${({ $variant }) =>
      $variant === "dark" ? modifiers.darkBorder : modifiers.lightBorder}
  }
`;

export const Input = styled.input<{
  $variant: "dark" | "light";
  $hasIcon: boolean;
  $hasError: boolean;
  $placeholderColor: string;
}>`
  width: 100%;
  padding: ${({ $hasIcon }) =>
    $hasIcon ? "12px 16px 12px 40px" : "12px 16px"};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.red[100] : theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.fontSizes.paragraph.p2};
  transition: border-color 0.3s;
  color: ${({ theme, $variant }) =>
    $variant === "dark" ? theme.colors.neutral[0] : theme.colors.neutral[500]};
  background-color: ${({ theme, $variant }) =>
    $variant === "dark" ? theme.colors.neutral[600] : theme.colors.neutral[0]};

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
