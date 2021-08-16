import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, cleanup } from "@testing-library/react";
import React from "react";
import { CustomLabel } from "../components/CustomLabel";

test("check if clabel renders correctly snapshot", () => {
  const wrapper = render(<CustomLabel>something else</CustomLabel>);
  expect(wrapper).toMatchSnapshot();
});
