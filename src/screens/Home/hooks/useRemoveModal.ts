import { toast } from "sonner";
import { useDeleteDragonMutation } from "../../../store/services/dragon";

export const useRemoveModal = () => {
  const [deleteDragon, { isLoading: isDeleting }] = useDeleteDragonMutation();

  const handleRemoveDragon = async (id: string) => {
    try {
      await deleteDragon({ id }).unwrap();
      toast.success("Dragão deletado com sucesso!");
    } catch {
      toast.error("Erro ao deletar dragão.");
    }
  };

  return {
    isDeleting,
    handleRemoveDragon
  };
};
