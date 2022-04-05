import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "./Profile";
import userEvent from "@testing-library/user-event";

it("when render the profile page should contain title", () => {
  render(<Profile />);
  const text = screen.getByText("Employee Basic Details");
  expect(text).toBeInTheDocument();
});

it("when render the profile page should enable the edit button", () => {
  render(<Profile />);
  const buttonElement = screen.getByRole("button", { name: /EDIT/i });
  userEvent.click(buttonElement);
  expect(buttonElement).toBeEnabled();
});

it("when render the profile page should contain img profile1", () => {
  render(<Profile />);
  const img = screen.getByTestId("profile1");
  expect(img).toBeInTheDocument();
});
