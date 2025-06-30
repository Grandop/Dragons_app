import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { theme } from "../../../theme/index";
import { Avatar } from "../index";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Avatar component", () => {
  it("should render the avatar image when src is provided", () => {
    renderWithTheme(
      <Avatar src="https://fakeimage.com/photo.jpg" alt="My Avatar" />
    );
    const image = screen.getByAltText("My Avatar");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://fakeimage.com/photo.jpg");
  });

  it("should render the EmptyDragonIcon when no src is provided", () => {
    renderWithTheme(<Avatar />);
    const container = screen.getByTestId("avatar-container");
    expect(container).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("should render the avatar container with data-testid", () => {
    renderWithTheme(<Avatar />);
    expect(screen.getByTestId("avatar-container")).toBeInTheDocument();
  });

  it("should apply custom width, height and border styles", () => {
    renderWithTheme(<Avatar width="150px" height="150px" border />);
    const container = screen.getByTestId("avatar-container");
    expect(container).toHaveStyle("width: 150px");
    expect(container).toHaveStyle("height: 150px");
    expect(container).toHaveStyle(`border: 4px solid ${theme.colors.red[100]}`);
  });

  it("should have a rounded border and center the content", () => {
    renderWithTheme(<Avatar />);
    const container = screen.getByTestId("avatar-container");
    expect(container).toHaveStyle("border-radius: 50%");
    expect(container).toHaveStyle("display: flex");
    expect(container).toHaveStyle("align-items: center");
    expect(container).toHaveStyle("justify-content: center");
    expect(container).toHaveStyle("overflow: hidden");
  });
});
