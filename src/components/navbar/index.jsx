import React from "react";
import { useLocation, Link } from "react-router-dom";
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
  console.log("location is", location);
  return (
    <NavContainer>
      <NavLink to="/" active={location.pathname === "/"}>
        Search
      </NavLink>
      <NavLink to="/akita" active={location.pathname === "/akita"}>
        Akita
      </NavLink>
      <NavLink
        to="/germanshepherd"
        active={location.pathname === "/germanshepherd"}
      >
        German Shepherd
      </NavLink>
    </NavContainer>
  );
};
