import { useState } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "styled-components";
import { Dragon } from "../../../entities/dragon";

export const useDragonList = (dragons: Dragon[] | undefined) => {
  const [isRemoveModalOpen, setRemoveIsModalOpen] = useState(false);
  const [isEditModalOpen, setEditIsModalOpen] = useState(false);
  const [dragonSelectd, setDragonSelected] = useState<Dragon | null>(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const sortedDragons = dragons
    ?.slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleDragonClicked = (
    event: React.MouseEvent,
    dragon: Dragon,
    type: "edit" | "remove"
  ) => {
    event.stopPropagation();
    setDragonSelected(dragon);
    if (type === "remove") {
      setRemoveIsModalOpen(true);
    } else {
      setEditIsModalOpen(true);
    }
  };

  const navigateToDetails = (id: string) => {
    navigate(`/dragons/${id}`);
  };

  return {
    isRemoveModalOpen,
    setRemoveIsModalOpen,
    isEditModalOpen,
    setEditIsModalOpen,
    theme,
    sortedDragons,
    dragonSelectd,
    handleDragonClicked,
    navigateToDetails
  };
};
