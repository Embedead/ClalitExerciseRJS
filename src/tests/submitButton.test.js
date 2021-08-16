import "@testing-library/jest-dom/extend-expect";
import {
  fireEvent,
  render,
  cleanup,
  screen,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { SubmitButton } from "../components/changingImage/formComponents/SubmitButton";

test("button props change color", async () => {
  render(<SubmitButton color="green">SUBMIT</SubmitButton>);
  const button = screen.getByText("SUBMIT");
  // fireEvent.mouseOver(button);
  expect(button).toMatchSnapshot();
});
