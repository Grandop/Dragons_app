import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ToastProvider } from "../index";

describe("ToastProvider", () => {
  it("should render the Toaster component correctly", () => {
    render(<ToastProvider />);
    const region = screen.getByRole("region", { name: /Notifications/i });
    expect(region).toBeInTheDocument();
  });
});
