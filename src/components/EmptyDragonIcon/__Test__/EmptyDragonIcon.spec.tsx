import { render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { EmptyDragonIcon } from "../index";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("EmptyDragonIcon component", () => {
  it("should render the dragon icon", () => {
    renderWithTheme(<EmptyDragonIcon />);
    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toBeInTheDocument();
  });

  it("should have the correct width and height", () => {
    renderWithTheme(<EmptyDragonIcon />);
    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toHaveStyle("width: 60px");
    expect(icon).toHaveStyle("height: 60px");
  });

  it("should have a circular border radius", () => {
    renderWithTheme(<EmptyDragonIcon />);
    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toHaveStyle(`border-radius: ${theme.borderRadius.circle}`);
  });

  it("should have the correct color", () => {
    renderWithTheme(<EmptyDragonIcon />);
    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toHaveStyle(`color: ${theme.colors.neutral[200]}`);
  });
});
