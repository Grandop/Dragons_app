import { fireEvent, render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { TextArea } from "../index";

const mockRegister = {
  name: "description",
  onChange: vi.fn(),
  onBlur: vi.fn(),
  ref: vi.fn()
};

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("TextArea component", () => {
  it("should render the label if provided", () => {
    renderWithTheme(
      <TextArea id="desc" label="Description" register={mockRegister} />
    );
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("should render the textarea", () => {
    renderWithTheme(<TextArea id="desc" register={mockRegister} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
  });

  it("should display placeholder text", () => {
    renderWithTheme(
      <TextArea
        id="desc"
        placeholder="Type your description"
        register={mockRegister}
      />
    );
    expect(
      screen.getByPlaceholderText("Type your description")
    ).toBeInTheDocument();
  });

  it("should display the error message when error is provided", () => {
    renderWithTheme(
      <TextArea
        id="desc"
        register={mockRegister}
        error={{ message: "This field is required", type: "required" }}
      />
    );
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should propagate typing events", () => {
    renderWithTheme(
      <TextArea id="desc" register={mockRegister} label="Description" />
    );
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Hello world" } });
    expect(textarea).toHaveValue("Hello world");
  });

  it("should have error border color when error is provided", () => {
    renderWithTheme(
      <TextArea
        id="desc"
        register={mockRegister}
        error={{ message: "error", type: "validate" }}
      />
    );
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveStyle(`border: 1px solid ${theme.colors.red[100]}`);
  });
});
