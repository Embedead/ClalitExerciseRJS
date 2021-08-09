import React from "react";
import styled from "styled-components";

const CLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const CustomLabel = ({ children }) => {
  return <CLabel>{children}</CLabel>;
};
