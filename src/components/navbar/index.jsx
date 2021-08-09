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

const NavLink = styled(Link)`
  background-color: ${(props) => (props.active ? "aquamarine" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-size: 18px;
  font-weight: 700;
  padding: 0.25rem;
  margin: 0.25rem;
  text-decoration: none;
  border-radius: 4px;
`;

export const Navbar = () => {
  const location = useLocation();
  return (
    <NavContainer>
      <NavLink to="/" active={location.pathname === "/"}>
        Home
      </NavLink>
      <NavLink to="/breedA" active={location.pathname === "/breedA"}>
        breed A
      </NavLink>
      <NavLink to="/breedB" active={location.pathname === "/breedB"}>
        breed B
      </NavLink>
    </NavContainer>
  );
};
