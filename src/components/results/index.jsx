import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ShowImage } from "../changingImage/ShowImage";

const ResultsContainer = styled.div`
  width: 85%;
  border-radius: 10px;
  background-color: white;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ResultsPage = () => {
  const images = useSelector((state) => state.dogReducer.images);

  return (
    <ResultsContainer>
      {images &&
        images.legnth != 0 &&
        images.map((item, index) => {
          return <ShowImage key={index} imagePath={item} />;
        })}
    </ResultsContainer>
  );
};
