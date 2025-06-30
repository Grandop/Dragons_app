import { forwardRef, InputHTMLAttributes, useId } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholderColor?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
  icon?: React.ReactNode;
  variant: "dark" | "light";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      register,
      icon,
      id,
      name,
      placeholderColor,
      variant,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const inputProps = register || { ref, name, id: inputId };

    return (
      <S.InputWrapper>
        {label && (
          <S.Label $variant={variant} htmlFor={inputId}>
            {label}
          </S.Label>
        )}

        <S.InputContainer $variant={variant} $hasError={!!error}>
          {icon && <S.IconContainer>{icon}</S.IconContainer>}
          <S.Input
            {...inputProps}
            {...props}
            id={inputId}
            $variant={variant}
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
