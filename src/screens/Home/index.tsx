import { useState } from "react";
import * as S from "./styles";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { CreateModal } from "../../components/Modal/CreateModal";
import { Typography } from "../../components/Typography";
import { DragonList } from "./components/DragonList";
import { useGetDragonQuery } from "../../store/services/dragon";

export const Home = () => {
  const { data: dragons, isLoading } = useGetDragonQuery();
  const [createModalOpen, setCreateModalOpen] = useState(false);
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
            onClick={() => setCreateModalOpen(true)}
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
      {createModalOpen && (
        <CreateModal isOpen={true} onClose={() => setCreateModalOpen(false)} />
      )}
    </S.Container>
  );
};
