import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { RemoveModal } from "../RemoveModal";

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

const deleteDragonMock = vi.fn();

vi.mock("@store/services/dragon", () => ({
  useDeleteDragonMutation: () => [deleteDragonMock, { isLoading: false }]
}));

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("RemoveModal component", () => {
  const onClose = vi.fn();

  const mockDragon = {
    id: "1",
    name: "Drogon",
    type: "Fogo",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    histories: "O maior dragão"
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render modal title and confirmation message", () => {
    renderWithTheme(
      <RemoveModal isOpen onClose={onClose} dragonSelected={mockDragon} />
    );
    expect(screen.getByText("Remover Dragão")).toBeInTheDocument();
    expect(
      screen.getByText(/Tem certeza que deseja remover este dragão/i)
    ).toBeInTheDocument();
  });

  it("should call onClose when cancel button is clicked", () => {
    renderWithTheme(
      <RemoveModal isOpen onClose={onClose} dragonSelected={mockDragon} />
    );
    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("should call handleRemoveDragon when confirm is clicked", async () => {
    deleteDragonMock.mockResolvedValue({});
    renderWithTheme(
      <RemoveModal isOpen onClose={onClose} dragonSelected={mockDragon} />
    );
    const confirmButton = screen.getByText("Remover");
    fireEvent.click(confirmButton);
    await waitFor(() => {
      expect(deleteDragonMock).toHaveBeenCalledWith({ id: mockDragon.id });
    });
  });
});
