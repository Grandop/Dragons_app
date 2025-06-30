import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EditModal } from "../EditModal";

const editDragonMock = vi.fn();

vi.mock("@store/services/dragon", () => ({
  useEditDragonMutation: () => [editDragonMock, { isLoading: false }]
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("EditModal component", () => {
  const onClose = vi.fn();

  const mockDragon = {
    id: "1",
    name: "Drogon",
    imageUrl: "http://dragon.png",
    createdAt: "2023-01-01T00:00:00Z",
    type: "Fogo",
    histories: ["Um dragão lendário"]
  };

  beforeEach(() => {
    onClose.mockClear();
  });

  it("should render the modal title and fields", () => {
    renderWithTheme(
      <EditModal isOpen onClose={onClose} dragonSelected={mockDragon} />
    );
    expect(screen.getByText("Editar Dragão")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Drogon")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Fogo")).toBeInTheDocument();
    expect(screen.getByDisplayValue("http://dragon.png")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Um dragão lendário")).toBeInTheDocument();
  });

  it("should call onClose when cancel button is clicked", () => {
    renderWithTheme(
      <EditModal isOpen onClose={onClose} dragonSelected={mockDragon} />
    );
    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("should render image preview when a valid imageUrl is typed", async () => {
    renderWithTheme(
      <EditModal isOpen onClose={onClose} dragonSelected={null} />
    );
    const urlInput = screen.getByPlaceholderText(
      /https:\/\/exemplo.com\/dragao.jpg/i
    );
    fireEvent.change(urlInput, {
      target: { value: "http://dragon-preview.png" }
    });
    await waitFor(() => {
      expect(screen.getByAltText("Preview do dragão")).toHaveAttribute(
        "src",
        "http://dragon-preview.png"
      );
    });
  });

  it("should call handleSubmit on confirm", async () => {
    editDragonMock.mockResolvedValue({});
    renderWithTheme(
      <EditModal isOpen onClose={onClose} dragonSelected={mockDragon} />
    );
    const confirmButton = screen.getByText("Editar");
    fireEvent.click(confirmButton);
    await waitFor(() => {
      expect(editDragonMock).toHaveBeenCalled();
    });
  });
});
