import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ShowImage } from "../changingImage/ShowImage";
import { vertJump } from "../navbar";

const ResultsContainer = styled.div`
  animation: ${vertJump} 0.25s linear;
  width: 85%;
  border-radius: 10px;
  background-color: white;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.3);
`;

export const ResultsPage = () => {
  const images = useSelector((state) => state.dogReducer.images);

  return (
    <ResultsContainer>
      {images &&
        images.legnth !== 0 &&
        images.map((item, index) => {
          return <ShowImage key={index} imagePath={item} />;
        })}
    </ResultsContainer>
  );
};
