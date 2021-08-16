import React from "react";
import styled from "styled-components";

const Submit = styled.button`
  margin: 0.5rem;
  background-color: ${(props) => props.color};
  border-radius: 6px;
  font-size: 18px;
  border-style: none;
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const SubmitButton = ({ children, color = "aquamarine" }) => {
  return <Submit color={color}>{children}</Submit>;
};
