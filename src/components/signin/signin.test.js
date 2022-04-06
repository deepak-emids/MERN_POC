import React from "react";
import { render, screen } from "@testing-library/react";
import Signin from "./Signin";
import * as foo from "./Signin";

import userEvent from "@testing-library/user-event";

// foo.next = jest.fn().mockResolvedValue("");
// jest.mock("./Signin", () => ({ next: jest.fn() }));

// jest.mock("./Signin", () => ({
//   ...jest.requireActual("./Signin"),
//   next: jest.fn(),
// }));

// test('does not drink something octopus-flavoured', () => {
//   const drink = jest.fn();
//   drinkAll(drink, 'octopus');
//   expect(drink).not.toHaveBeenCalled();
// });

it("when clicked on login button should call the next function", () => {
  foo.next = jest.fn();

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
