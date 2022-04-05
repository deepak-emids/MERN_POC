import React from "react";
import { render, screen } from "@testing-library/react";
import Tables from "./Tables";
import userEvent from "@testing-library/user-event";

it("when render the Tables page should enable the add button", () => {
  render(<Tables />);
  const buttonElement = screen.getByRole("button", { name: /ADD/i });
  userEvent.click(buttonElement);
  expect(buttonElement).toBeEnabled();
});
