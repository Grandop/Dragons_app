import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholderColor?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, register, icon, id, name, placeholderColor, ...props },
    ref
  ) => {
    const inputProps = register || { ref, name, id };

    return (
      <S.InputWrapper>
        {label && <S.Label htmlFor={id}>{label}</S.Label>}

        <S.InputContainer $hasError={!!error}>
          {icon && <S.IconContainer>{icon}</S.IconContainer>}
          <S.Input
            {...inputProps}
            {...props}
            id={id}
            $hasIcon={!!icon}
            $hasError={!!error}
            $placeholderColor={placeholderColor || ""}
          />
        </S.InputContainer>

        {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
      </S.InputWrapper>
    );
  }
);

Input.displayName = "Input";
