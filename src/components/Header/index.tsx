import * as S from "./styles";
import { useTheme } from "styled-components";
import DragonIcon from "../../assets/images/dragon.png";
import { Typography } from "../Typography";

export const Header = () => {
  const theme = useTheme();
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
      <S.SettingsButton />
    </S.Header>
  );
};
