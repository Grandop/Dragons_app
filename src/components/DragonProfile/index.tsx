import * as S from "./styles";
import { Dragon } from "@entities/dragon";
import { formatDate } from "@utils/formatDate";
import { Avatar } from "../Avatar";

interface DragonProfileProps {
  dragon: Dragon | undefined;
}

export const DragonProfile = ({ dragon }: DragonProfileProps) => {
  return (
    <S.DragonCard>
      <S.ProfileSection>
        <S.ProfileHeader>
          <Avatar src={dragon?.imageUrl} width="120px" height="120px" border />

          <S.ProfileInfo>
            <S.DragonName>{dragon?.name}</S.DragonName>
            <S.DragonSubtitle>
              Criado em{" "}
              {dragon?.createdAt
                ? formatDate(dragon.createdAt)
                : "Data inválida"}
            </S.DragonSubtitle>
            <S.DragonType>{dragon?.type}</S.DragonType>
          </S.ProfileInfo>
        </S.ProfileHeader>

        {dragon?.histories && (
          <S.HistorySection>
            <S.SectionTitle>História ou Descrição</S.SectionTitle>
            <S.HistoryText>
              {dragon.histories.length > 0
                ? dragon.histories
                : "Nenhuma descrição encontrada."}
            </S.HistoryText>
          </S.HistorySection>
        )}
      </S.ProfileSection>
    </S.DragonCard>
  );
};
