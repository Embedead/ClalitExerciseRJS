import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, cleanup } from "@testing-library/react";
import React from "react";
import { DropdownSelect } from "../components/changingImage/DropdownSelect";

test("check if input works", () => {
  const { getByTestId } = render(<DropdownSelect />);
  const input = getByTestId("input-number");
  const button = getByTestId("submit-btn");
  const errorMsg = getByTestId("breed-select-error");

  fireEvent.change(input, { target: { value: 5 } });
  fireEvent.click(button);
  expect(errorMsg).toBeInTheDocument();
});
