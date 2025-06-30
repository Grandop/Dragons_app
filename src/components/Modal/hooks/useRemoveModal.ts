import { useDeleteDragonMutation } from "@store/services/dragon";
import { toast } from "sonner";

export const useRemoveModal = (onClose: () => void) => {
  const [deleteDragon, { isLoading: isDeleting }] = useDeleteDragonMutation();

  const handleRemoveDragon = async (id: string) => {
    try {
      await deleteDragon({ id }).unwrap();
      toast.success("Dragão deletado com sucesso!");
      onClose();
    } catch {
      toast.error("Erro ao deletar dragão.");
    }
  };

  return {
    isDeleting,
    handleRemoveDragon
  };
};
