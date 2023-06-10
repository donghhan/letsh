import { useState } from "react";
import styled from "styled-components";
import Menu from "./normal/index";

export default function Navbar(): JSX.Element {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);

  return (
    <HeaderSection>
      <Menu open={hamburgerMenuOpen} />
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
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.white};
`;
