import React from "react";
import { Button } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { TbHotelService } from "react-icons/tb";

const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  z-index: 1000;
  background-color: #fff;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .nav-items {
      display: flex;
      align-items: center;
      margin-left: 1.5rem;

      li {
        margin: 0 1.5rem;
        font-weight: bold;
        letter-spacing: 1.5px;
      }
    }

    .extra-links {
      display: flex;
      align-items: center;

      li {
        margin-right: 2rem;
      }
    }
  }
`;

const LogoText = styled(Link)`
  font-family: "Rubik Distressed", cursive;
  font-size: 2.5rem;
  color: #ff8f00;
`;

const AuthButton = styled(Link)`
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
`;

export default function Navbar() {
  return (
    <Header>
      <LogoText to="/">Let'sh</LogoText>
      <nav>
        <ul className="nav-items">
          <li>
            <NavLink to="/">Room</NavLink>
          </li>
          <li>
            <NavLink to="/">House</NavLink>
          </li>
          <li>
            <NavLink to="/">Hotel Apartments</NavLink>
          </li>
          <li>
            <NavLink to="/">Parking</NavLink>
          </li>
          <li>
            <NavLink to="/">Transportation</NavLink>
          </li>
        </ul>
        <ul className="extra-links">
          <li>
            <NavLink to="/">Become a Host</NavLink>
          </li>
          <li>
            <NavLink to="/">Find Roommate</NavLink>
          </li>
          <AuthButton to="/">Sign in</AuthButton>
        </ul>
      </nav>
    </Header>
  );
}
