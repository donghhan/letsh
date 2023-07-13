import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

interface AvatarMenuProp {
  onLogOut?: () => void;
}

export default function AvatarMenu({ onLogOut }: AvatarMenuProp): JSX.Element {
  return <AvatarMenuWrapper></AvatarMenuWrapper>;
}

const AvatarMenuWrapper = styled.div`
  max-width: 150px;
  max-height: 80px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;
