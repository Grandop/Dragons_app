import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { DragonFormData, dragonSchema } from "../../../utils/schema";
import { Dragon } from "../../../entities/dragon";
import { useEditDragonMutation } from "../../../store/services/dragon";

export const useEditModal = (
  onClose: () => void,
  dragonSelected: Dragon | null
) => {
  const [editDragon, { isLoading: isEditing }] = useEditDragonMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<DragonFormData>({
    resolver: zodResolver(dragonSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
      type: "",
      histories: ""
    }
  });

  const handleFormSubmit = async (data: DragonFormData) => {
    try {
      await editDragon({
        id: dragonSelected?.id || "",
        name: data.name,
        imageUrl: data.imageUrl,
        type: data.type,
        histories: [data.histories]
      }).unwrap();
      handleClose();
      toast.success("Dragão editado com sucesso!");
    } catch {
      toast.error("Erro ao editar dragão");
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  useEffect(() => {
    reset({
      name: dragonSelected?.name,
      imageUrl: dragonSelected?.imageUrl,
      type: dragonSelected?.type,
      histories: Array.isArray(dragonSelected?.histories)
        ? dragonSelected?.histories.join(", ")
        : dragonSelected?.histories
    });
  }, [reset]);

  return {
    register,
    handleSubmit,
    errors,
    watch,
    handleFormSubmit,
    isEditing
  };
};
