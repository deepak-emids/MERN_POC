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

it("when render the Tables page should enable the delete button", () => {
  render(<Tables />);
  const buttonElement = screen.getByRole("button", { name: /DELETE/i });
  userEvent.click(buttonElement);
  expect(buttonElement).toBeEnabled();
});

it("when render the Tables page should enable the back button", () => {
  render(<Tables />);
  const buttonElement = screen.getByRole("button", { name: /BACK/i });
  userEvent.click(buttonElement);
  expect(buttonElement).toBeEnabled();
});
