import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateDragonMutation } from "@store/services/dragon";
import { toast } from "sonner";
import { useTheme } from "styled-components";
import { DragonFormData, dragonSchema } from "@utils/schema";

export const useCreateDragon = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [createDragon, { isLoading: isCreating }] = useCreateDragonMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
      navigate("/dragons");
      toast.success("Dragão criado com sucesso!");
    } catch {
      toast.error("Erro ao criar dragão. Tente novamente.");
    }
  };

  const handleBack = () => {
    navigate("/dragons");
  };

  return {
    handleFormSubmit,
    register,
    handleSubmit,
    errors,
    watch,
    isCreating,
    handleBack,
    theme
  };
};
