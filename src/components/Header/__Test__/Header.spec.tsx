import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "@store";
import { AuthActions } from "@store/slices/auth";
import { fireEvent, render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { toast } from "sonner";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { Header } from "../index";

vi.mock("@store", () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(() => vi.fn())
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn()
  }
}));
vi.mock("react-router", () => ({
  useNavigate: vi.fn()
}));

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Header component", () => {
  const mockedDispatch = vi.fn();
  const mockedNavigate = vi.fn();

  beforeEach(() => {
    (useAppDispatch as unknown as Mock).mockReturnValue(mockedDispatch);
    (useNavigate as unknown as Mock).mockReturnValue(mockedNavigate);
    vi.clearAllMocks();
  });

  it("should render the logo and text", () => {
    (useAppSelector as unknown as Mock).mockReturnValue({
      accessToken: null
    });
    renderWithTheme(<Header />);
    expect(screen.getByText(/Dragons/i)).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", expect.stringContaining("dragon.png"));
  });

  it("should render the logout button when accessToken exists", () => {
    (useAppSelector as unknown as Mock).mockReturnValue({
      accessToken: "token"
    });
    renderWithTheme(<Header />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should call dispatch, navigate and toast on logout click", () => {
    (useAppSelector as unknown as Mock).mockReturnValue({
      accessToken: "token"
    });
    renderWithTheme(<Header />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockedDispatch).toHaveBeenCalledWith(AuthActions.logout());
    expect(mockedNavigate).toHaveBeenCalledWith("/signin");
    expect(toast.success).toHaveBeenCalledWith(
      "Você foi desconectado com sucesso!"
    );
  });

  it("should not render the logout button when no accessToken", () => {
    (useAppSelector as unknown as Mock).mockReturnValue({
      accessToken: null
    });
    renderWithTheme(<Header />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
