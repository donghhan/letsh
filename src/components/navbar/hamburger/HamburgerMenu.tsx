import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { BsGlobe, BsChevronRight } from "react-icons/bs";
import NavItem from "../NavItem";
import { menuItems } from "../data";
import { MenuOpenProps, SetMenuOpenProps } from "../interface";

export default function HamburgerMenu({
  open,
  setOpen,
}: SetMenuOpenProps): JSX.Element {
  const { i18n } = useTranslation();
  const handleLanguageChange = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("th")
      : i18n.changeLanguage("en");
  };
  return (
    <HamburgerMenuSection open={open}>
      <HamburgerCloseButton onClick={() => setOpen(!open)} />
      <nav>
        <MenuList>
          {menuItems.map((data) => (
            <li>
              <NavItem
                data={data}
                key={data.key}
                offNav={() => setOpen(false)}
              />
            </li>
          ))}
        </MenuList>
        <UtilMenu>
          <li>
            <BsGlobe />
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
            <button>register</button>
          </li>
          <li>
            <button className="sign-in">
              sign in <BsChevronRight />
            </button>
          </li>
        </AuthMenu>
      </nav>
    </HamburgerMenuSection>
  );
}

const HamburgerMenuSection = styled.aside<MenuOpenProps>`
  width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  right: 0;
  top: 0;
  border-left: 1px solid ${({ theme }) => theme.color.darkgray};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;

  nav {
    width: 100%;
    height: 100%;
    padding: 8em 3em;
  }
`;

const HamburgerCloseButton = styled(AiOutlineClose)`
  font-size: 2rem;
  position: absolute;
  top: 0.8em;
  left: 0.5em;
`;

const MenuList = styled.ul`
  li {
    margin: 1em 0;

    a {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fontFamily.robotoMono};
    }
  }
`;

const UtilMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 3em;

  li {
    display: flex;
    align-items: center;

    svg {
      font-size: 1.5rem;
    }

    button {
      margin-left: 0.5em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fontFamily.robotoMono};
      font-size: 1.5rem;
    }
  }
`;

const AuthMenu = styled.ul`
  display: flex;
  gap: 1em;
  margin-top: 2em;

  li {
    display: flex;
    align-items: center;

    button {
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fontFamily.robotoMono};
      font-size: 1rem;
      display: flex;
      align-items: center;
    }

    .sign-in {
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
      padding: 0.5em 1em;

      svg {
        margin-left: 0.5em;
      }
    }
  }
`;
