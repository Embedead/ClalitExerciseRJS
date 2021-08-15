import React from "react";
import styled from "styled-components";

const ShowImageContainer = styled.div`
  padding: 0.5rem;
  width: auto;
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: max-content;
  border-radius: 10px;
`;

export const ShowImage = ({ imagePath }) => {
  return (
    <ShowImageContainer>
      <ImgContainer
        data-testid="img-cont"
        src={imagePath}
        alt="something here"
      />
    </ShowImageContainer>
  );
};
