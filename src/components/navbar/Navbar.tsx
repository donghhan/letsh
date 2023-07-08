import { useState } from "react";
import styled from "styled-components";
import Menu from "./normal/index";
import HamburgerMenu from "./hamburger/HamburgerMenu";
import useUser from "../../hooks/useUser";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const { userLoading, user, isLoggedIn } = useUser();

  return (
    <HeaderSection>
      <Menu open={open} setOpen={setOpen} />
      <HamburgerMenu open={open} setOpen={setOpen} />
    </HeaderSection>
  );
}

const HeaderSection = styled.header`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.darkgray};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.color.white};
`;
