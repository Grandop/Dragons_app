import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SignIn } from "..";
import { store } from "@store";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

const mockedNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom"
    );
  return {
    ...actual,
    useNavigate: () => mockedNavigate
  };
});

describe("SignIn Screen", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderWithProviders = () =>
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <SignIn />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

  it("should perform login with valid credentials", async () => {
    renderWithProviders();

    const emailInput = screen.getByPlaceholderText("Digite seu e-mail");
    const passwordInput = screen.getByPlaceholderText("Digite sua senha");
    const button = screen.getByRole("button", { name: /entrar/i });

    await userEvent.type(emailInput, "user@email.com");
    await userEvent.type(passwordInput, "senha123");
    await userEvent.click(button);

    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });

    expect((await import("sonner")).toast.success).toHaveBeenCalledWith(
      "Login realizado com sucesso!"
    );

    expect(mockedNavigate).toHaveBeenCalledWith("/dragons");
  });

  it("should show an error when using invalid credentials", async () => {
    renderWithProviders();

    const emailInput = screen.getByPlaceholderText("Digite seu e-mail");
    const passwordInput = screen.getByPlaceholderText("Digite sua senha");
    const button = screen.getByRole("button", { name: /entrar/i });

    await userEvent.type(emailInput, "email@invalido.com");
    await userEvent.type(passwordInput, "senhaerrada");
    await userEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /entrar/i })
      ).not.toBeDisabled();
    });

    expect((await import("sonner")).toast.error).toHaveBeenCalledWith(
      "Credenciais inválidas"
    );
  });
});
