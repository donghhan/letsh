import React from "react";
import {
  Button,
  useColorMode,
  IconButton,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;

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

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const DarkModeToggleImage = useColorModeValue(BsFillMoonFill, BsFillSunFill);

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
        <HStack className="extra-links">
          <li>
            <NavLink to="/">Become Host</NavLink>
          </li>
          <li>
            <NavLink to="/">Find My Mate</NavLink>
          </li>
          <IconButton
            aria-label="dark-mode-toggle"
            colorScheme={colorMode === "light" ? "gray" : "whiteAlpha"}
            icon={<DarkModeToggleImage />}
            color={colorMode === "light" ? "gray" : "white"}
            onClick={toggleColorMode}
          />
          <Link to="/">
            <Button
              color="white"
              bg="orange.500"
              width="7rem"
              fontWeight={"normal"}
              _hover={{ bg: "orange.400" }}
              _active={{ bg: "orange.700" }}
              boxShadow="0px 8px 15px rgba(0, 0, 0, .3)"
            >
              Sign in
            </Button>
          </Link>
        </HStack>
      </nav>
    </Header>
  );
}
