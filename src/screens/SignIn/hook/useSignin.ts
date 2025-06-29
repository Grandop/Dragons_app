import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@store";
import { AuthActions } from "@store/slices/auth";
import { toast } from "sonner";
import { useTheme } from "styled-components";
import { LoginFormData, loginSchema } from "../schema";

const defaultUser = {
  email: "user@email.com",
  password: "senha123"
};

const fakeToken = "fake-jwt-token-" + Math.random().toString(36).substring(2);

export const useSignin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (
      data.email === defaultUser.email &&
      data.password === defaultUser.password
    ) {
      toast.success("Login realizado com sucesso!");
      dispatch(AuthActions.login(fakeToken));
      navigate("/dragons");
    } else {
      toast.error("Credenciais inválidas");
    }
    setIsLoading(false);
  };

  return { isLoading, register, handleSubmit, errors, onSubmit, theme };
};
