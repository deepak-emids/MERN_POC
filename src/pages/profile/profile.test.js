import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "./Profile";
import userEvent from "@testing-library/user-event";

it("when render the profile page should contain title", () => {
  render(<Profile />);
  const text = screen.getByText("Employee Basic Details");
  expect(text).toBeInTheDocument();
});
