import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { theme } from "./theme";
import GlobalStyle from "./theme/globals";
import { Toaster } from "sonner";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster
          richColors
          position="top-right"
          toastOptions={{ style: { padding: "16px" } }}
        />
        <RouterProvider router={router} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}
