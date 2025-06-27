import { useState } from "react";
import { useTheme } from "styled-components";
import { Dragon } from "../../../entities/dragon";

export const useDragonList = (dragons: Dragon[] | undefined) => {
  const [isRemoveModalOpen, setRemoveIsModalOpen] = useState(false);
  const [isEditModalOpen, setEditIsModalOpen] = useState(false);
  const [dragonSelectd, setDragonSelected] = useState<Dragon | null>(null);
  const theme = useTheme();
  const sortedDragons = dragons
    ?.slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleDragonClicked = (dragon: Dragon, type: "edit" | "remove") => {
    setDragonSelected(dragon);
    if (type === "remove") {
      setRemoveIsModalOpen(true);
    } else {
      setEditIsModalOpen(true);
    }
  };

  return {
    isRemoveModalOpen,
    setRemoveIsModalOpen,
    isEditModalOpen,
    setEditIsModalOpen,
    theme,
    sortedDragons,
    dragonSelectd,
    handleDragonClicked
  };
};
