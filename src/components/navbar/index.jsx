import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

export const vertJump = keyframes`
  from{
    opacity: 0;
    transform: translateY(20px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  background-color: rgb(255, 255, 255);
  margin: 0.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.1);
  animation: ${vertJump} 0.25s linear;
`;

const NavLink = styled(Link)`
  background-color: ${(props) => (props.active ? "aquamarine" : "white")};
  font-size: 18px;
  font-weight: 700;
  padding: 0.25rem;
  margin: 0.25rem;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: aquamarine;
  }
`;

export const Navbar = () => {
  const pathname = useSelector((state) => state.router.location.pathname);
  console.log("pathname is", pathname);
  return (
    <NavContainer>
      <NavLink to="/" active={pathname === "/"}>
        Search
      </NavLink>
      <NavLink to="/akita" active={pathname === "/akita"}>
        Akita
      </NavLink>
      <NavLink to="/germanshepherd" active={pathname === "/germanshepherd"}>
        German Shepherd
      </NavLink>
    </NavContainer>
  );
};
