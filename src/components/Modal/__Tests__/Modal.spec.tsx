import { fireEvent, render, screen } from "@testing-library/react";
import { theme } from "@theme";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "../index";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("Modal component", () => {
  const onClose = vi.fn();
  const onConfirm = vi.fn();

  beforeEach(() => {
    onClose.mockClear();
    onConfirm.mockClear();
  });

  it("should not render when isOpen is false", () => {
    renderWithTheme(
      <Modal
        isOpen={false}
        onClose={onClose}
        onConfirm={onConfirm}
        title="My Modal"
      >
        Modal content
      </Modal>
    );
    expect(screen.queryByText("My Modal")).not.toBeInTheDocument();
  });

  it("should render when isOpen is true", () => {
    renderWithTheme(
      <Modal
        isOpen={true}
        onClose={onClose}
        onConfirm={onConfirm}
        title="My Modal"
      >
        Modal content
      </Modal>
    );
    expect(screen.getByText("My Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("should trigger onClose when overlay is clicked", () => {
    renderWithTheme(
      <Modal isOpen onClose={onClose} onConfirm={onConfirm} title="My Modal">
        Content
      </Modal>
    );
    const overlay = screen.getByTestId("modal-overlay");
    fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalled();
  });

  it("should trigger onClose when close button is clicked", () => {
    renderWithTheme(
      <Modal isOpen onClose={onClose} onConfirm={onConfirm} title="My Modal">
        Content
      </Modal>
    );
    const closeBtn = screen.getByRole("button", { name: "" });
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  it("should trigger onConfirm when confirm button is clicked", () => {
    renderWithTheme(
      <Modal isOpen onClose={onClose} onConfirm={onConfirm} title="My Modal">
        Content
      </Modal>
    );
    const confirmButton = screen.getByText("Confirmar");
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalled();
  });

  it("should render loader and disable confirm button when confirmLoading is true", () => {
    renderWithTheme(
      <Modal
        isOpen
        onClose={onClose}
        onConfirm={onConfirm}
        title="My Modal"
        confirmLoading
        confirmText="Confirmar"
      >
        Content
      </Modal>
    );
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
