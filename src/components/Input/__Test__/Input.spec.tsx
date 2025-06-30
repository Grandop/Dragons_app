import { PiUser } from "react-icons/pi";
import { fireEvent, render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { Input } from "../index";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Input component", () => {
  it("should render the label if provided", () => {
    renderWithTheme(<Input label="Username" variant="dark" />);
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
  });

  it("should render the input without label if label is not provided", () => {
    renderWithTheme(<Input variant="dark" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should render the error message if error is provided", () => {
    renderWithTheme(
      <Input
        label="Email"
        error={{ message: "Invalid email", type: "validate" }}
        variant="light"
      />
    );
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  it("should render an icon if provided", () => {
    renderWithTheme(
      <Input
        label="With Icon"
        icon={<PiUser data-testid="input-icon" />}
        variant="dark"
      />
    );
    expect(screen.getByTestId("input-icon")).toBeInTheDocument();
  });

  it("should support placeholder", () => {
    renderWithTheme(<Input placeholder="Type here..." variant="light" />);
    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });

  it("should apply correct variant styles", () => {
    renderWithTheme(<Input variant="dark" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle(`background-color: ${theme.colors.neutral[600]}`);

    renderWithTheme(<Input variant="light" />);
    const lightInput = screen.getAllByRole("textbox")[1];
    expect(lightInput).toHaveStyle(
      `background-color: ${theme.colors.neutral[0]}`
    );
  });

  it("should propagate typing events", () => {
    renderWithTheme(<Input label="Name" variant="light" />);
    const input = screen.getByLabelText("Name");
    fireEvent.change(input, { target: { value: "John Doe" } });
    expect(input).toHaveValue("John Doe");
  });
});
