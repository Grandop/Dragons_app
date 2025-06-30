import { BrowserRouter } from "react-router-dom";
import { DragonDetails } from "..";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { useDetails } from "../hook/useDetails";

vi.mock("@components/DragonProfile", () => ({
  DragonProfile: vi.fn(() => <div>DragonProfile Mock</div>)
}));

vi.mock("@components/Button", () => ({
  Button: vi.fn(({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  ))
}));

vi.mock("@components/Loader", () => ({
  Loader: vi.fn(() => <div>Loader Mock</div>)
}));

vi.mock("../hook/useDetails", () => ({
  useDetails: vi.fn()
}));

describe("DragonDetails Screen", () => {
  const mockDragon = {
    id: "1",
    name: "Test Dragon",
    type: "fire",
    histories: [],
    imageUrl: "https://example.com/test-dragon.jpg",
    createdAt: "2023-01-01T00:00:00Z"
  };

  const renderComponent = () =>
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DragonDetails />
        </BrowserRouter>
      </ThemeProvider>
    );

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useDetails).mockReturnValue({
      dragon: undefined,
      isLoading: true,
      handleBack: vi.fn()
    });
  });

  it("should render loading state when data is being fetched", () => {
    renderComponent();
    expect(screen.getByText("Loader Mock")).toBeInTheDocument();
    expect(screen.queryByText("DragonProfile Mock")).not.toBeInTheDocument();
  });

  it("should render dragon profile when data is loaded", () => {
    vi.mocked(useDetails).mockReturnValue({
      dragon: mockDragon,
      isLoading: false,
      handleBack: vi.fn()
    });

    renderComponent();
    expect(screen.getByText("DragonProfile Mock")).toBeInTheDocument();
    expect(screen.queryByText("Loader Mock")).not.toBeInTheDocument();
  });

  it("should call handleBack when back button is clicked", async () => {
    const mockHandleBack = vi.fn();
    vi.mocked(useDetails).mockReturnValue({
      dragon: mockDragon,
      isLoading: false,
      handleBack: mockHandleBack
    });

    renderComponent();
    const backButton = screen.getByText(/voltar/i);
    await userEvent.click(backButton);
    expect(mockHandleBack).toHaveBeenCalledTimes(1);
  });
});
