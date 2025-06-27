import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";
import { Loader } from "../Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
  loaderColor?: "white" | "blue";
}

export const Button = ({
  children,
  loading,
  loaderColor,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button {...rest} disabled={loading || rest.disabled}>
      {loading ? <Loader variant={loaderColor} /> : children}
    </S.Button>
  );
};
