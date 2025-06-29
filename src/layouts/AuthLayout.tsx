import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "@store";

export const AuthLayout = () => {
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      navigate("/dragons", { replace: true });
    }
  }, [navigate]);

  return <Outlet />;
};
