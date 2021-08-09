import React from "react";
import { ChangingImage } from "../components/changingImage";
import styled from "styled-components";
import { Navbar } from "../components/navbar";
const HomepageContainer = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aquamarine;
`;

export const HomepageView = () => {
  return (
    <HomepageContainer>
      <Navbar />
      <ChangingImage />
    </HomepageContainer>
  );
};
