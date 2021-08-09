import React from "react";
import styled from "styled-components";
import { ShowImage } from "./ShowImage";
import { DropdownSelect } from "./DropdownSelect";
import { CustomLabel } from "../CustomLabel";
import { useSelector } from "react-redux";
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
  const images = useSelector((state) => state.images);
  console.log("images array is", images);
  return (
    <Container>
      <CustomLabel>
        No dogs were harmed in the making of this assignment
      </CustomLabel>
      <DropdownSelect />
      {images &&
        images.map((item, index) => {
          return <ShowImage key={index} imagePath={item} />;
        })}
    </Container>
  );
};
