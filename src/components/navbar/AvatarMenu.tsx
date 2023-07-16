import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonCircle } from "react-icons/io5";

interface AvatarMenuProp {
  avatar?: string;
  onLogOut?: () => void;
}

export default function AvatarMenu({
  avatar,
  onLogOut,
}: AvatarMenuProp): JSX.Element {
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);

  const handleDropDownMenu = () => {
    setOpenDropDownMenu((openDropDownMenu) => !openDropDownMenu);
  };

  const handleLogout = async () => {
    toast("Successfully Logged Out!", {
      position: "bottom-right",
      autoClose: 2000,
      pauseOnHover: false,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  return (
    <AvatarMenuWrapper onClick={handleDropDownMenu}>
      <HamburgerMenu />
      {avatar ? (
        <AvartarProfile>
          <img src={avatar} alt="User Profile Avatar" />
        </AvartarProfile>
      ) : (
        <NonAvatarProfile />
      )}
      <DropDownMenu $openDropDownMenu={openDropDownMenu}>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </DropDownMenu>
    </AvatarMenuWrapper>
  );
}

const AvatarMenuWrapper = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.color.darkgray};
  cursor: pointer;
  position: relative;
`;

const HamburgerMenu = styled(RxHamburgerMenu)`
  font-size: 1.125rem;
`;

const AvartarProfile = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const NonAvatarProfile = styled(IoPersonCircle)`
  font-size: 2rem;
`;

const DropDownMenu = styled.div<{ $openDropDownMenu: boolean }>`
  width: 180px;
  position: absolute;
  right: 0;
  bottom: -50px;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.5em;
  height: fit-content;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  visibility: ${(props) => (props.$openDropDownMenu ? "visible" : "hidden")};
`;
