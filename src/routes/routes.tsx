import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { Details } from "../screens/Details";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/dragons",
        element: <Home />
      },
      {
        path: "/dragon/:id",
        element: <Details />
      },
      {
        path: "/create-dragon/",
        element: <Details />
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/signin",
        element: <SignIn />
      }
    ]
  }
]);
