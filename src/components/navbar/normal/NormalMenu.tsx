import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsGlobe, BsChevronRight } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { menuItems } from "../data";
import { currencyState } from "../../../atoms/atom";
import { MenuOpenProps, SetMenuOpenProps } from "../interface";

export default function NormalMenu({
  open,
  setOpen,
}: SetMenuOpenProps): JSX.Element {
  const { i18n } = useTranslation();
  const handleLanguageChange = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("th")
      : i18n.changeLanguage("en");
  };

  const setCurrentCurrency = useSetRecoilState(currencyState);
  const changeCurrency = () => {};

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
      <HamburgerMenuButton onClick={() => setOpen(!open)} />
      <UtilMenu>
        <BsGlobe />
        <li>
          <button type="button" onClick={() => handleLanguageChange()}>
            {i18n.language === "en" ? "th" : "en"}
          </button>
        </li>
        <li>
          <button type="button"></button>
        </li>
      </UtilMenu>
      <AuthMenu>
        <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <Link to="/login" className="log-in">
            sign in <BsChevronRight />
          </Link>
        </li>
      </AuthMenu>
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
  position: relative;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 0 5em;
    justify-content: space-between;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 1.5em;
  letter-spacing: 0.1em;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.openSans};
  font-weight: 600;
  font-size: 2rem;

  ${({ theme }) => theme.breakpoints.between("xs", "lg")} {
    margin: 0 auto;
  }
`;

const HamburgerMenuButton = styled(RxHamburgerMenu)`
  font-size: 2rem;
  margin-left: auto;
  position: absolute;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.only("md")} {
    right: 2em;
  }

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    right: 1em;
  }
`;

const UtilMenu = styled.ul`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }

  button {
    margin-left: 0.5em;
    letter-spacing: 0.1em;
    font-size: 1.125rem;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.robotoMono};
  }
`;

const AuthMenu = styled.ul`
  display: flex;
  gap: 1em;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }

  li {
    display: flex;
    align-items: center;

    a {
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fontFamily.robotoMono};
      font-size: 1rem;
      display: flex;
      align-items: center;
    }

    .log-in {
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
      padding: 0.5em 1em;

      svg {
        margin-left: 0.5em;
      }
    }
  }
`;
