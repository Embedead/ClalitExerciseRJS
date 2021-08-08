import React from "react";
import { ChangingImage } from "../components/changingImage";
import styled from "styled-components";
const HomepageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: aquamarine;
  /* padding: 0.5rem; */
  overflow: hidden;
`;

export const HomepageView = () => {
  return (
    <HomepageContainer>
      <ChangingImage />
    </HomepageContainer>
  );
};
