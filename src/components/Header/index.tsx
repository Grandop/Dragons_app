import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from "react-router";
import * as S from "./styles";
import { toast } from "sonner";
import { useTheme } from "styled-components";
import DragonIcon from "../../assets/images/dragon.png";
import { useAppDispatch, useAppSelector } from "../../store";
import { AuthActions } from "../../store/slices/auth";
import { Typography } from "../Typography";

export const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(AuthActions.logout());
    navigate("/signin");
    toast.success("Você foi desconectado com sucesso!");
  };

  return (
    <S.Header>
      <S.LogoContainer>
        <S.LogoIcon src={DragonIcon} />
        <Typography
          color={theme.colors.neutral[0]}
          fontSize="heading1"
          fontWeight="bold"
        >
          Dragons
        </Typography>
      </S.LogoContainer>
      {accessToken && (
        <S.SettingsContainer onClick={handleLogout}>
          <PiSignOutBold size={20} />
        </S.SettingsContainer>
      )}
    </S.Header>
  );
};
