import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { CreateDragon } from "..";
import { store } from "@/store";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { vi } from "vitest";

vi.mock("@store/services/dragon", async () => {
  const actual = await vi.importActual("@store/services/dragon");
  return {
    ...actual,
    useCreateDragonMutation: () => [
      vi.fn(() => ({
        unwrap: () => Promise.resolve({})
      })),
      { isLoading: false }
    ]
  };
});

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

describe("CreateDragon Screen", () => {
  function renderWithProviders() {
    return render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CreateDragon />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }

  it("renders form fields correctly", () => {
    renderWithProviders();

    expect(
      screen.getByPlaceholderText(/Vhagar|Balerion|Drogon/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Dragão de Fogo/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/https:\/\/exemplo.com/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Conte a história/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Criar Novo Dragão/i)).toBeInTheDocument();
  });

  it("submits the form successfully", async () => {
    renderWithProviders();

    fireEvent.change(screen.getByLabelText(/Nome do Dragão/i), {
      target: { value: "Drogon" }
    });
    fireEvent.change(screen.getByLabelText(/Tipo do Dragão/i), {
      target: { value: "Fire Dragon" }
    });
    fireEvent.change(screen.getByLabelText(/URL da Imagem/i), {
      target: { value: "https://dragon.com/drogon.png" }
    });
    fireEvent.change(screen.getByPlaceholderText(/Conte a história/i), {
      target: { value: "A powerful Targaryen dragon" }
    });

    fireEvent.click(screen.getByRole("button", { name: /Criar Dragão/i }));

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith("/dragons");
    });
  });

  it("shows validation errors if required fields are empty", async () => {
    renderWithProviders();

    fireEvent.click(screen.getByRole("button", { name: /Criar Dragão/i }));

    await waitFor(() => {
      expect(
        screen.getAllByText(/required|obrigatório/i).length
      ).toBeGreaterThan(0);
    });
  });

  it("navigates back when clicking the cancel button", () => {
    renderWithProviders();

    fireEvent.click(screen.getByRole("button", { name: /Cancelar/i }));
    expect(mockedNavigate).toHaveBeenCalledWith("/dragons");
  });

  it("shows the image preview when a valid URL is entered", () => {
    renderWithProviders();

    const imageUrlInput = screen.getByLabelText(/URL da Imagem/i);

    fireEvent.change(imageUrlInput, {
      target: { value: "https://dragon.com/drogon.png" }
    });

    const preview = screen.getByAltText(/Preview do dragão/i);
    expect(preview).toHaveAttribute("src", "https://dragon.com/drogon.png");
  });

  it("hides the image preview if URL is broken", async () => {
    renderWithProviders();

    const imageUrlInput = screen.getByLabelText(/URL da Imagem/i);

    fireEvent.change(imageUrlInput, {
      target: { value: "https://invalid-url.com/image.png" }
    });

    const previewImage = screen.getByAltText(/Preview do dragão/i);
    fireEvent.error(previewImage);

    await waitFor(() => {
      expect(previewImage).not.toBeVisible();
    });
  });
});
