import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

it("when render the abuout page should contain title", () => {
  render(<About />);
  const text = screen.getByText("CRM");
  expect(text).toBeInTheDocument();
});

// it("tesh should fail when render the abuout page does not contaion title", () => {
//   render(<About />);
//   const text = screen.getByText("Hello-Testing");
//   expect(text).not.toBeInTheDocument();
// });

it("when render the abuout page should contaion tagline", () => {
  render(<About />);
  const text = screen.getByText("Creating your perfect world");
  expect(text).toBeInTheDocument();
});

it("when render the abuout page should contain vec image 1", () => {
  render(<About />);
  const img = screen.getByTestId("vec1");
  expect(img).toBeInTheDocument();
});

it("when render the abuout page should contain vec image 2", () => {
  render(<About />);
  const img = screen.getByTestId("vec2");
  expect(img).toBeInTheDocument();
});

it("when render the abuout page should contain mission title", () => {
  render(<About />);
  const text = screen.getByText("Our Mission");
  expect(text).toBeInTheDocument();
});
