import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import * as S from "./styles";
import { Typography } from "../Typography";

interface TextAreaProps {
  id: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  error?: FieldError;
  label?: string;
}

export const TextArea = ({
  register,
  id,
  placeholder,
  error,
  label
}: TextAreaProps) => {
  return (
    <>
      {label && (
        <Typography fontSize="p2" fontWeight="semibold">
          {label}
        </Typography>
      )}
      <S.TextArea
        $hasError={!!error}
        id={id}
        placeholder={placeholder}
        {...register}
      />
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </>
  );
};
