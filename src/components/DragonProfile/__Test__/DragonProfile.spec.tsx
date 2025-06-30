import { Dragon } from "@entities/dragon";
import { render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { formatDate } from "@utils/formatDate";
import { DragonProfile } from "../index";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("DragonProfile component", () => {
  const mockDragon: Dragon = {
    id: "1",
    name: "Test Dragon",
    type: "Fire",
    createdAt: "2024-01-01T00:00:00Z",
    histories: "This is a fierce dragon",
    imageUrl: "https://fakeimg.com/dragon.png"
  };

  it("should render the dragon name", () => {
    renderWithTheme(<DragonProfile dragon={mockDragon} />);
    expect(screen.getByText("Test Dragon")).toBeInTheDocument();
  });

  it("should render the dragon type", () => {
    renderWithTheme(<DragonProfile dragon={mockDragon} />);
    expect(screen.getByText("Fire")).toBeInTheDocument();
  });

  it("should render the createdAt formatted", () => {
    renderWithTheme(<DragonProfile dragon={mockDragon} />);
    const formattedDate = formatDate(mockDragon.createdAt);
    expect(screen.getByText(`Criado em ${formattedDate}`)).toBeInTheDocument();
  });

  it("should render the dragon history", () => {
    renderWithTheme(<DragonProfile dragon={mockDragon} />);
    expect(screen.getByText(/This is a fierce dragon/i)).toBeInTheDocument();
  });

  it("should render fallback if createdAt is missing", () => {
    renderWithTheme(
      <DragonProfile dragon={{ ...mockDragon, createdAt: "" }} />
    );
    expect(screen.getByText(/Data inválida/i)).toBeInTheDocument();
  });

  it("should render fallback if history is empty", () => {
    renderWithTheme(
      <DragonProfile dragon={{ ...mockDragon, histories: "" }} />
    );
    expect(
      screen.getByText(/Nenhuma descrição encontrada/i)
    ).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderWithTheme(
      <DragonProfile dragon={mockDragon} />
    );
    expect(container).toMatchSnapshot();
  });
});
