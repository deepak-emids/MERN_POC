import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

it("when render the contact page should contain title", () => {
  render(<Contact />);
  const text = screen.getByText("Reach Us Here");
  expect(text).toBeInTheDocument();
});

it("when render the contact page should contaion tagline", () => {
  render(<Contact />);
  const img = screen.getByTestId("table1");
  expect(img).toBeInTheDocument();
});

it("when render the contact page should contain vec image 2", () => {
  render(<Contact />);
  const img = screen.getByTestId("contact1");
  expect(img).toBeInTheDocument();
});
