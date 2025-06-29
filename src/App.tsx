import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { theme } from "./theme";
import GlobalStyle from "./theme/globals";
import { ThemeProvider } from "styled-components";
import { ToastProvider } from "./components/ToastProvider";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastProvider />
        <RouterProvider router={router} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}
