import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

it("when render the contact page should contain title", () => {
  render(<Contact />);
  const text = screen.getByText("Reach Us Here");
  expect(text).toBeInTheDocument();
});
