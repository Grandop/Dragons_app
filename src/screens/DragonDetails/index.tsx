import { useDetails } from "./hook/useDetails";
import * as S from "./styles";
import { theme } from "@theme";
import { Button } from "@components/Button";
import { DragonProfile } from "@components/DragonProfile";
import { Loader } from "@components/Loader";

export const DragonDetails = () => {
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
