import { render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { Loader } from "../index";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("Loader component", () => {
  it("should render with default variant (white)", () => {
    renderWithTheme(<Loader />);
    const loader = screen.getByRole("loading");
    expect(loader).toBeInTheDocument();
  });

  it("should render with blue variant", () => {
    renderWithTheme(<Loader variant="blue" />);
    const loader = screen.getByRole("loading");
    expect(loader).toBeInTheDocument();
  });

  it("should have correct size and border radius", () => {
    renderWithTheme(<Loader />);
    const loader = screen.getByRole("loading");
    expect(loader).toHaveStyle("width: 30px");
    expect(loader).toHaveStyle("height: 30px");
    expect(loader).toHaveStyle(`border-radius: ${theme.borderRadius.circle}`);
  });

  it("should have animation applied", () => {
    renderWithTheme(<Loader />);
    const loader = screen.getByRole("loading");
    expect(loader).toHaveStyle("animation-duration: 1s");
    expect(loader).toHaveStyle("animation-iteration-count: infinite");
    expect(loader).toHaveStyle("animation-timing-function: linear");
  });
});
