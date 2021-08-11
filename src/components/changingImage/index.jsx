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
  box-shadow: 0px 5px 17px 3px rgba(0, 0, 0, 0.66);
`;

export const ChangingImage = () => {
  const images = useSelector((state) => state.dogReducer.images);
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
