import { useSignin } from "./hook/useSignin";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const SignIn = () => {
  const { errors, handleSubmit, isLoading, onSubmit, register, theme } =
    useSignin();

  return (
    <>
      <S.LoginContainer>
        <S.LoginCard>
          <S.Title>Login</S.Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              id="email"
              type="text"
              placeholder="Digite seu e-mail"
              error={errors.email}
              {...register("email")}
            />
            <Input
              label="Senha"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              error={errors.password}
              {...register("password")}
            />
            <Button
              type="submit"
              loading={isLoading}
              loaderColor="blue"
              disabled={isLoading || Object.keys(errors).length > 0}
              backgroundColor={theme.colors.neutral[700]}
              height="50px"
            >
              Entrar
            </Button>
          </form>
        </S.LoginCard>
      </S.LoginContainer>
    </>
  );
};
