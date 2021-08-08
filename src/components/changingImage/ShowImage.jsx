import React from "react";
import styled from "styled-components";
import TestImage from "../../images/1HHLPI.png";
import { useSelector } from "react-redux";

const ShowImageContainer = styled.div`
  padding: 0.5rem;
  width: auto;
  height: 500px;
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

export const ShowImage = () => {
  const currentPath = useSelector((state) => state.currentPath);

  console.log("current image is", currentPath);
  return (
    <ShowImageContainer>
      <ImgContainer src={currentPath} alt="something here" />
    </ShowImageContainer>
  );
};
