import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderSection = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
`;

const HeaderWrapper = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 0 10em;
  }
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItems = styled.li`
  text-transform: uppercase;
  font-size: 1.125rem;
  font-weight: 500;
`;

const Logo = styled(Link)`
  font-size: 2.5rem;
  font-weight: 600;
`;

const UtilMenu = styled.ul`
  display: flex;
`;

const UtilMenuItem = styled.li``;

const UtilButton = styled.button`
  text-transform: uppercase;
`;

const AuthMenu = styled(UtilMenu)``;

const RegisterButton = styled.button`
  text-transform: uppercase;
`;

const SigninButton = styled.button`
  text-transform: uppercase;
`;

export default function Header() {
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
      text: "elp",
    },
  ];

  return (
    <HeaderSection>
      <HeaderWrapper>
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
            <UtilButton>en</UtilButton>
          </UtilMenuItem>
          <UtilMenuItem>
            <UtilButton>usd</UtilButton>
          </UtilMenuItem>
        </UtilMenu>
        <AuthMenu>
          <RegisterButton>register</RegisterButton>
          <SigninButton>sign in</SigninButton>
        </AuthMenu>
      </HeaderWrapper>
    </HeaderSection>
  );
}
