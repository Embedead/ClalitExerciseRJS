import React from "react";
import styled from "styled-components";
import { DropdownSelect } from "./DropdownSelect";
import { CustomLabel } from "../CustomLabel";
import { vertJump } from "../navbar/index";

const Container = styled.div`
  animation: ${vertJump} 0.25s linear;
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  border-radius: 10px;
  height: fit-content;
  flex-direction: column;
  width: 50%;
  background-color: white;
  box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.3);
`;

export const ChangingImage = () => {
  return (
    <Container>
      <CustomLabel>
        No dogs were harmed in the making of this assignment
      </CustomLabel>
      <DropdownSelect />
    </Container>
  );
};
