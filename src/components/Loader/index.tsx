import * as S from "./styles";

export interface LoaderProps {
  variant?: "white" | "blue";
}

export const Loader = ({ variant = "white" }: LoaderProps) => {
  return <S.Loader $variant={variant} />;
};
