import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";

export const AppLayout = () => {
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      navigate("/sign-in", { replace: true });
    }
  }, [navigate]);

  return <Outlet />;
};
