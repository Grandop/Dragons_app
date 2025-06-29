import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DragonFormData, dragonSchema } from "../utils/schema";
import { useCreateDragonMutation } from "../../../store/services/dragon";

export const useCreateModal = (onClose: () => void) => {
  const [createDragon, { isLoading: isCreating }] = useCreateDragonMutation();

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
      await createDragon({
        name: data.name,
        imageUrl: data.imageUrl,
        type: data.type,
        histories: data.histories
      }).unwrap();
      handleClose();
    } catch (error) {
      console.error("Erro ao criar dragão:", error);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return {
    register,
    handleSubmit,
    errors,
    watch,
    handleFormSubmit,
    isCreating
  };
};
