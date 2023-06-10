import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { menuItems, languageMenuItmes } from "../data";

interface NormalMenuProps {
  open: boolean;
}

export default function NormalMenu({ open }: NormalMenuProps): JSX.Element {
  const { i18n, t } = useTranslation();
  const handleLanguageChange = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("th")
      : i18n.changeLanguage("en");
  };

  return (
    <NormalNavbarSection>
      <Menu>
        {menuItems.map((i) => (
          <li key={i.key}>
            <Link to={i.to}>{i.text}</Link>
          </li>
        ))}
      </Menu>
      <Logo to="/">Let'sh</Logo>
      <HamburgerMenuButton />
      <UtilMenu>
        <BsGlobe />
        <li>
          <button type="button" onClick={() => handleLanguageChange()}>
            {i18n.language === "en" ? "th" : "en"}
          </button>
        </li>
      </UtilMenu>
      <AuthMenu></AuthMenu>
    </NormalNavbarSection>
  );
}

const NormalNavbarSection = styled.nav`
  font-size: 1rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily.robotoMono};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 0 5em;
    justify-content: space-between;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    justify-content: center;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 1.5em;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.openSans};
  font-weight: 600;
  font-size: 2rem;
`;

const HamburgerMenuButton = styled(RxHamburgerMenu)`
  font-size: 1.5rem;
  margin-left: auto;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: none;
  }
`;

const UtilMenu = styled.ul`
  display: flex;
  align-items: center;

  button {
    margin-left: 0.5em;
    font-size: 1.125rem;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.robotoMono};
  }
`;

const AuthMenu = styled(Menu)``;
