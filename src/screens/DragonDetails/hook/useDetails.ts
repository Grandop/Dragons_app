import { useNavigate, useParams } from "react-router";
import { useGetDragonByIdQuery } from "../../../store/services/dragon";

export const useDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: dragon, isLoading } = useGetDragonByIdQuery({ id: id || "" });

  const handleBack = () => {
    navigate("/dragons");
  };

  return { dragon, isLoading, handleBack };
};
