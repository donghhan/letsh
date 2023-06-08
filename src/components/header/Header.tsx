import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { BiGlobe, BiDollar } from "react-icons/bi";
import { TbCurrencyBaht } from "react-icons/tb";
import HamburgerButton from "./HamburgerButton";

const HeaderSection = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;

  ${({ theme }) => theme.breakpoints.between("xs", "lg")} {
    width: 300px;
    height: 100vh;
    float: right;
    padding: 15em 3em 0;
  }
`;

const HeaderWrapper = styled.nav`
  width: 100%;
  display: flex;

  ${({ theme }) => theme.breakpoints.between("xs", "lg")} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 0 5em;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 1.5em;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    flex-direction: column;
    gap: 2em;
    margin-bottom: 3em;
    width: 100%;
  }
`;

const MenuItems = styled.li`
  text-transform: uppercase;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const Logo = styled(Link)`
  font-size: 2.5rem;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.between("xs", "lg")} {
    position: absolute;
    top: 1em;
    right: 50%;
    transform: translateX(50%);
  }
`;

const UtilMenu = styled.ul`
  display: flex;
  gap: 1em;

  ${({ theme }) => theme.breakpoints.between("xs", "lg")} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
  }
`;

const UtilMenuItem = styled.li``;

const UtilButton = styled.button`
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 0.2em;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.3em;
  }
`;

const AuthMenu = styled(UtilMenu)``;

const RegisterButton = styled.button`
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15em;
`;

const SigninButton = styled.button`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  padding: 0.5em;
  letter-spacing: 0.15em;

  svg {
    margin-left: 0.5em;
  }
`;

export default function Header() {
  const [language, setLanguage] = useState<string>();
  const [currency, setCurrency] = useState<string>();

  const onLanguageChange = () => {
    if (language === "en") {
      setLanguage("th");
    } else {
      setLanguage("en");
    }
  };

  const onCurrencyChange = () => {
    if (currency === "usd") {
      setCurrency("thb");
    } else {
      setCurrency("usd");
    }
  };

  const menuItems = [
    {
      id: "explore",
      to: "/explore",
      text: "explore",
    },
    {
      id: "topPlaces",
      to: "/top-places",
      text: "top places",
    },
    {
      id: "blog",
      to: "/blog",
      text: "blog",
    },
    {
      id: "help",
      to: "/help",
      text: "help",
    },
  ];

  return (
    <HeaderSection>
      <HeaderWrapper>
        <HamburgerButton />
        <Menu>
          {menuItems.map((i) => (
            <MenuItems key={i.id}>
              <Link to={i.to}>{i.text}</Link>
            </MenuItems>
          ))}
        </Menu>
        <Logo to="/">Let'sh</Logo>
        <UtilMenu>
          <UtilMenuItem>
            <UtilButton onClick={onLanguageChange}>
              <BiGlobe />
              {language === "en" ? "th" : "en"}
            </UtilButton>
          </UtilMenuItem>
          <UtilMenuItem>
            <UtilButton onClick={onCurrencyChange}>
              {currency === "usd" ? (
                <>
                  <TbCurrencyBaht />
                  thb
                </>
              ) : (
                <>
                  <BiDollar />
                  usd
                </>
              )}
            </UtilButton>
          </UtilMenuItem>
        </UtilMenu>
        <AuthMenu>
          <RegisterButton>register</RegisterButton>
          <SigninButton>
            sign in <BsChevronRight />
          </SigninButton>
        </AuthMenu>
      </HeaderWrapper>
    </HeaderSection>
  );
}
