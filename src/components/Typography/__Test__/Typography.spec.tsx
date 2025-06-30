import { fireEvent, render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { Typography } from "../index";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("Typography component", () => {
  it("should render default as paragraph (p)", () => {
    renderWithTheme(<Typography>Default Text</Typography>);
    const text = screen.getByText("Default Text");
    expect(text.tagName.toLowerCase()).toBe("p");
  });

  it("should render provided tag h1", () => {
    renderWithTheme(<Typography tag="h1">Heading 1</Typography>);
    const text = screen.getByText("Heading 1");
    expect(text.tagName.toLowerCase()).toBe("h1");
  });

  it("should render dynamic tag based on fontSize", () => {
    renderWithTheme(<Typography fontSize="heading2">Dynamic</Typography>);
    const text = screen.getByText("Dynamic");
    expect(text.tagName.toLowerCase()).toBe("h2");
  });

  it("should apply custom color", () => {
    renderWithTheme(
      <Typography color={theme.colors.red[100]}>Colored</Typography>
    );
    const text = screen.getByText("Colored");
    expect(text).toHaveStyle(`color: ${theme.colors.red[100]}`);
  });

  it("should apply correct font size from theme", () => {
    renderWithTheme(<Typography fontSize="heading3">Sized</Typography>);
    const text = screen.getByText("Sized");
    expect(text).toHaveStyle(`font-size: ${theme.fontSizes.headings.heading3}`);
  });

  it("should apply correct font weight", () => {
    renderWithTheme(<Typography fontWeight="bold">Bold Text</Typography>);
    const text = screen.getByText("Bold Text");
    expect(text).toHaveStyle(`font-weight: ${theme.fontWeight.bold}`);
  });

  it("should call onClick handler", () => {
    const onClickMock = vi.fn();
    renderWithTheme(<Typography onClick={onClickMock}>Clickable</Typography>);
    const text = screen.getByText("Clickable");
    fireEvent.click(text);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should support aria-label", () => {
    renderWithTheme(<Typography aria-label="label test">Content</Typography>);
    expect(screen.getByLabelText("label test")).toBeInTheDocument();
  });
});
