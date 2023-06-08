import styled from "styled-components";

const HamburgerBtnContainer = styled.div`
  display: none;
  position: relative;
  width: 3rem;
  height: 2.5rem;

  ${({ theme }) => theme.breakpoints.between("xs", "lg")} {
    display: block;
    display: flex;
    align-items: center;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.color.black};
`;

const UpperLine = styled(Line)`
  position: absolute;
  top: 0;
`;

const LowerLine = styled(Line)`
  position: absolute;
  bottom: 0;
`;

export default function HamburgerButton() {
  return (
    <HamburgerBtnContainer>
      <UpperLine />
      <Line />
      <LowerLine />
    </HamburgerBtnContainer>
  );
}
