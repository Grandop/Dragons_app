import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Home } from "..";
import { Middleware, Reducer } from "@reduxjs/toolkit";
import { store } from "@store";
import { useGetDragonQuery } from "@store/services/dragon";
import { render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn()
  };
});

interface DragonServiceUtil {
  resetApiState: Mock;
}

interface DragonService {
  reducerPath: string;
  reducer: Reducer;
  middleware: Middleware;
  util: DragonServiceUtil;
  endpoints: Record<string, unknown>;
  injectEndpoints: Mock;
}

vi.mock(
  "@store/services/dragon",
  (): { useGetDragonQuery: Mock; DragonService: DragonService } => ({
    useGetDragonQuery: vi.fn(),
    DragonService: {
      reducerPath: "dragonApi",
      reducer: (state = {}) => state,
      middleware: () => (next) => (action) => next(action),
      util: {
        resetApiState: vi.fn()
      },
      endpoints: {},
      injectEndpoints: vi.fn()
    }
  })
);

describe("Home Screen", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

  it("should render title and button", () => {
    (useGetDragonQuery as Mock).mockReturnValue({
      data: [],
      isLoading: false
    });

    renderComponent();

    expect(screen.getByText("Lista de Dragões")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /criar dragão/i })
    ).toBeInTheDocument();
  });

  it("should render loader while loading", () => {
    (useGetDragonQuery as Mock).mockReturnValue({
      data: undefined,
      isLoading: true
    });

    renderComponent();
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render empty message when there are no dragons", () => {
    (useGetDragonQuery as Mock).mockReturnValue({
      data: [],
      isLoading: false
    });

    renderComponent();

    expect(screen.getByText("Nenhum dragão encontrado.")).toBeInTheDocument();
  });

  it("should render empty message when data is undefined", () => {
    (useGetDragonQuery as Mock).mockReturnValue({
      data: undefined,
      isLoading: false
    });

    renderComponent();

    expect(screen.getByText("Nenhum dragão encontrado.")).toBeInTheDocument();
  });

  it("should render DragonList when dragons are returned", () => {
    const mockDragons = [
      {
        id: "1",
        name: "Firedrake",
        type: "fire",
        createdAt: new Date().toISOString(),
        histories: "A fire-breathing dragon",
        imageUrl: "https://fakeimg.com/firedrake"
      }
    ];

    (useGetDragonQuery as Mock).mockReturnValue({
      data: mockDragons,
      isLoading: false
    });

    renderComponent();

    expect(screen.getByText("Firedrake")).toBeInTheDocument();
  });
});
