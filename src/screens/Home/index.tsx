import { useNavigate } from "react-router";
import * as S from "./styles";
import { useGetDragonQuery } from "@store/services/dragon";
import { useTheme } from "styled-components";
import { DragonList } from "./components/DragonList";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Loader } from "@components/Loader";
import { Typography } from "@components/Typography";

export const Home = () => {
  const { data: dragons, isLoading } = useGetDragonQuery();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <S.Container>
      <Header />
      <S.MainContent>
        <S.SectionHeader>
          <Typography
            color={theme.colors.neutral[0]}
            fontSize="heading1"
            fontWeight="bold"
          >
            Lista de Dragões
          </Typography>
          <Button
            loaderColor="white"
            backgroundColor={theme.colors.red[100]}
            height="40px"
            width="120px"
            onClick={() => navigate("/dragons/create")}
          >
            Criar Dragão
          </Button>
        </S.SectionHeader>
        {!isLoading ? (
          dragons && dragons.length > 0 ? (
            <DragonList dragons={dragons} />
          ) : (
            <Typography
              color={theme.colors.neutral[0]}
              fontSize="heading1"
              fontWeight="regular"
            >
              Nenhum dragão encontrado.
            </Typography>
          )
        ) : (
          <Loader variant="white" />
        )}
      </S.MainContent>
    </S.Container>
  );
};
