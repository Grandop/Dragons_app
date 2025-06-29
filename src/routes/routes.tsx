import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { CreateDragon } from "../screens/CreateDragon";
import { DragonDetails } from "../screens/DragonDetails";
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
        path: "/dragons/:id",
        element: <DragonDetails />
      },
      {
        path: "/dragons/create",
        element: <CreateDragon />
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
