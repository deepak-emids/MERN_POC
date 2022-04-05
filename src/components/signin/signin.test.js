import React from "react";
import { render, screen } from "@testing-library/react";
import Signin from "./Signin";
import * as foo from "./Signin";

import userEvent from "@testing-library/user-event";

foo.next = jest.fn().mockResolvedValue("");
// jest.mock("./Signin", () => ({ next: jest.fn() }));

// jest.mock("./Signin", () => ({
//   ...jest.requireActual("./Signin"),
//   next: jest.fn(),
// }));

it("when clicked on login button should call the next function", () => {
  render(<Signin />);

  const buttonElement = screen.getByRole("button", { name: /LOGIN/i });
  userEvent.click(buttonElement);
  expect(foo.next).toHaveBeenCalled();
});

it("when ", () => {
  render(<Signin />);

  const buttonElement = screen.getByRole("button", { name: /LOGIN/i });
  userEvent.click(buttonElement);
  expect(buttonElement).toBeEnabled();
});
