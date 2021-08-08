import React from "react";
import styled from "styled-components";
import { ShowImage } from "./ShowImage";
import { DropdownSelect } from "./DropdownSelect";
import { imageLut } from "../misc/imgLUT";
const Container = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  border-radius: 10px;
  height: fit-content;
  flex-direction: column;
  width: 50%;
  background-color: white;
`;

export const ChangingImage = () => {
  const { Image1 } = imageLut();
  const [currentPath, setCurrentPath] = React.useState(Image1);

  return (
    <Container>
      <ShowImage />
      <DropdownSelect />
    </Container>
  );
};
