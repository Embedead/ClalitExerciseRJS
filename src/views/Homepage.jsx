import React from "react";
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

export const HomepageView = ({ children }) => {
  return (
    <HomepageContainer>
      <Navbar />
      {children}
    </HomepageContainer>
  );
};
