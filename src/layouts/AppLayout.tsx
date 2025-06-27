import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/sign-in", { replace: true });
    }
  }, [navigate]);

  return <Outlet />;
};
