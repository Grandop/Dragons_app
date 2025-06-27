import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";
import { Loader } from "../Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
  loaderColor?: "white" | "blue";
  backgroundColor?: string;
  width?: string;
  height?: string;
}

export const Button = ({
  children,
  loading,
  loaderColor,
  backgroundColor,
  width,
  height,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button
      {...rest}
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      disabled={loading || rest.disabled}
    >
      {loading ? <Loader variant={loaderColor} /> : children}
    </S.Button>
  );
};
