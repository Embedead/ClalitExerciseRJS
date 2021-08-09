import React from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  background-color: rgb(255, 255, 255);
  margin: 0.5rem;
  border-radius: 8px;
`;

const NavLink = styled.span`
  background-color: ${(props) => (props.active ? "aquamarine" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-size: 18px;
  font-weight: 700;
  padding: 0.25rem;
  margin: 0.25rem;
`;

export const Navbar = () => {
  const location = useLocation();
  return (
    <NavContainer>
      <Link to="/">
        <NavLink active={location.pathname === "/"}>Home</NavLink>
      </Link>
    </NavContainer>
  );
};
