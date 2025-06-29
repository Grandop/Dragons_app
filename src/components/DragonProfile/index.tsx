import * as S from "./styles";
import { formatDate } from "../../utils/formatDate";
import { Dragon } from "../../entities/dragon";

interface DragonProfileProps {
  dragon: Dragon | undefined;
}

export const DragonProfile = ({ dragon }: DragonProfileProps) => {
  return (
    <S.DragonCard>
      <S.ProfileSection>
        <S.ProfileHeader>
          <S.DragonAvatar>
            {dragon?.imageUrl ? (
              <S.AvatarImage
                src={dragon.imageUrl}
                alt={dragon.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            ) : (
              <S.EmptyDragonIcon />
            )}
          </S.DragonAvatar>

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
