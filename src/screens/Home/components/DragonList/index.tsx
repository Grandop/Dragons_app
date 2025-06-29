import * as S from "./styles";
import { useDragonList } from "../../hooks/useDragonList";
import { Avatar } from "../../../../components/Avatar";
import { Button } from "../../../../components/Button";
import { EditModal } from "../../../../components/Modal/EditModal";
import { RemoveModal } from "../../../../components/Modal/RemoveModal";
import { Typography } from "../../../../components/Typography";
import { Dragon } from "../../../../entities/dragon";

interface DragonListProps {
  dragons: Dragon[] | undefined;
}

export const DragonList = ({ dragons }: DragonListProps) => {
  const {
    isEditModalOpen,
    isRemoveModalOpen,
    setEditIsModalOpen,
    setRemoveIsModalOpen,
    sortedDragons,
    dragonSelectd,
    handleDragonClicked,
    navigateToDetails,
    theme
  } = useDragonList(dragons);

  return (
    <S.Grid>
      {sortedDragons?.map((dragon) => (
        <S.Card onClick={() => navigateToDetails(dragon.id)} key={dragon.id}>
          <S.CardHeader>
            <Avatar src={dragon?.imageUrl} width="60px" height="60px" />

            <Typography
              color={theme.colors.neutral[0]}
              fontSize="heading5"
              fontWeight="bold"
            >
              {dragon.name}
            </Typography>
          </S.CardHeader>

          <S.Description>
            {dragon.histories.length > 0
              ? dragon.histories
              : "Nenhuma descrição encontrada."}
          </S.Description>

          <S.Footer>
            <Button
              loaderColor="white"
              backgroundColor={theme.colors.neutral[800]}
              height="20px"
              width="90px"
              onClick={(event) => handleDragonClicked(event, dragon, "remove")}
            >
              Remover
            </Button>
            <Button
              loaderColor="white"
              backgroundColor={theme.colors.red[100]}
              height="20px"
              width="70px"
              onClick={(event) => handleDragonClicked(event, dragon, "edit")}
            >
              Editar
            </Button>
          </S.Footer>
        </S.Card>
      ))}
      {isRemoveModalOpen && (
        <RemoveModal
          onClose={() => setRemoveIsModalOpen(false)}
          isOpen={isRemoveModalOpen}
          dragonSelected={dragonSelectd}
        />
      )}
      {isEditModalOpen && (
        <EditModal
          onClose={() => setEditIsModalOpen(false)}
          isOpen={isEditModalOpen}
          dragonSelected={dragonSelectd}
        />
      )}
    </S.Grid>
  );
};
