import React from "react";
import styled from "styled-components";

const ErrorRow = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  align-items: center;
`;

const ErrorLabel = styled.label`
  color: red;
  font-weight: 700;
`;

export const Error = ({ message }) => {
  return (
    <ErrorRow>
      <ErrorLabel>{message}</ErrorLabel>
    </ErrorRow>
  );
};
