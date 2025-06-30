import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Dragon } from "@entities/dragon";
import { store } from "@store";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { DragonList } from "../components/DragonList";

vi.mock("react-router", () => ({
  useNavigate: () => vi.fn()
}));

describe("DragonList Component", () => {
  const sampleDragons: Dragon[] = [
    {
      id: "1",
      name: "Firedrake",
      type: "fire",
      createdAt: new Date().toISOString(),
      histories: "A fire-breathing dragon",
      imageUrl: "https://fakeimg.com/firedrake"
    },
    {
      id: "2",
      name: "Icedrake",
      type: "ice",
      createdAt: new Date().toISOString(),
      histories: "",
      imageUrl: "https://fakeimg.com/icedrake"
    }
  ];

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <DragonList dragons={sampleDragons} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render dragon cards with correct name and images", () => {
    renderComponent();

    expect(screen.getByText("Firedrake")).toBeInTheDocument();
    expect(screen.getByText("Icedrake")).toBeInTheDocument();

    const avatars = screen.getAllByRole("img", { name: /avatar/i });
    expect(avatars).toHaveLength(2);
  });

  it("should open the edit modal when clicking Edit button", async () => {
    renderComponent();

    const editButtons = screen.getAllByRole("button", { name: /editar/i });

    await userEvent.click(editButtons[0]);

    expect(await screen.findByText(/firedrake/i)).toBeInTheDocument();
  });

  it("should open the remove modal when clicking Remove button", async () => {
    renderComponent();

    const removeButtons = screen.getAllByRole("button", { name: /remover/i });

    await userEvent.click(removeButtons[0]);

    expect(await screen.findByText(/firedrake/i)).toBeInTheDocument();
  });

  it("should show placeholder description if history is empty", () => {
    renderComponent();

    expect(
      screen.getByText("Nenhuma descrição encontrada.")
    ).toBeInTheDocument();
  });
});
