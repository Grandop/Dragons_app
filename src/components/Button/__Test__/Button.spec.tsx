import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../index";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Button component", () => {
  it("should render the button text", () => {
    renderWithTheme(<Button>Submit</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Submit");
  });

  it("should render the loader when loading is true", () => {
    renderWithTheme(<Button loading>Submit</Button>);
    expect(screen.getByRole("loading")).toBeInTheDocument();
  });

  it("should apply custom background color", () => {
    renderWithTheme(
      <Button backgroundColor={theme.colors.red[100]}>Custom Color</Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`background-color: ${theme.colors.red[100]}`);
  });

  it("should apply custom width and height", () => {
    renderWithTheme(
      <Button width="300px" height="80px">
        Size
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyle("width: 300px");
    expect(button).toHaveStyle("height: 80px");
  });

  it("should be disabled when loading is true", () => {
    renderWithTheme(<Button loading>Submit</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should be disabled when disabled prop is passed", () => {
    renderWithTheme(<Button disabled>Submit</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should trigger onClick when clicked", () => {
    const handleClick = vi.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not trigger onClick when disabled", () => {
    const handleClick = vi.fn();
    renderWithTheme(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should have the correct role", () => {
    renderWithTheme(<Button>Check role</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should match the default styles", () => {
    renderWithTheme(<Button>Default</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`border-radius: ${theme.borderRadius.xs}`);
    expect(button).toHaveStyle(`font-size: ${theme.fontSizes.paragraph.p2}`);
    expect(button).toHaveStyle(`font-weight: ${theme.fontWeight.semibold}`);
  });
});
