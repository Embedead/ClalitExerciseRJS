import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, cleanup } from "@testing-library/react";
import React from "react";
import { ShowImage } from "../components/changingImage/ShowImage";
import { imageLut } from "../components/misc/imgLUT";

test("check if image renders correctly", () => {
  const { Image1 } = imageLut();
  const { getByTestId } = render(<ShowImage imagePath={Image1} />);
  const displayedImage = document.querySelector("img");

  expect(displayedImage.src).toContain("png");
});
