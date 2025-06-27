import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return <Outlet />;
};
