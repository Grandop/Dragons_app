import { useDetails } from "./hook/useDetails";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { DragonProfile } from "../../components/DragonProfile";
import { Loader } from "../../components/Loader";
import { theme } from "../../theme";

export const Details = () => {
  const { dragon, handleBack, isLoading } = useDetails();

  return (
    <S.Container>
      <S.MainContent>
        {!isLoading ? (
          <>
            <Button
              width="90px"
              backgroundColor={theme.colors.neutral[800]}
              onClick={handleBack}
            >
              <S.ChevronLeftIcon size={20} />
              Voltar
            </Button>
            <DragonProfile dragon={dragon} />
          </>
        ) : (
          <S.LoadingContainer>
            <Loader variant="white" />
          </S.LoadingContainer>
        )}
      </S.MainContent>
    </S.Container>
  );
};
