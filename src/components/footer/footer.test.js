import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import userEvent from "@testing-library/user-event";

it("when render the Footer page should contain title", () => {
  render(<Footer />);
  const text = screen.getByText("GET IN TOUCH");
  expect(text).toBeInTheDocument();
});

it("when render the Footer page should contain title", () => {
  render(<Footer />);
  const text = screen.getByText("(480)634-5200");
  expect(text).toBeInTheDocument();
});

it("when render the Footer page should contain title", () => {
  render(<Footer />);
  const text = screen.getByText("mail@quovanatis.com");
  expect(text).toBeInTheDocument();
});
