import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsGlobe, BsChevronRight } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { menuItems } from "../data";
import { currencyState, authState } from "../../../atoms/atom";
import AvatarMenu from "../AvatarMenu";
import useUser from "../../../hooks/useUser";
import { logout } from "../../../api/userApi";
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

  const { userLoading, user, isLoggedIn } = useUser();
  const queryClient = useQueryClient();

  const mutation = useMutation(logout, {
    onSuccess: () => {
      queryClient.refetchQueries(["my-profile"]);
      toast.success("Successfully Logged Out!", {
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: true,
        hideProgressBar: true,
        pauseOnHover: false,
      });
    },
    onError: () => {
      toast.error("Something went wrong...", {
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: true,
        hideProgressBar: true,
        pauseOnHover: false,
      });
    },
  });

  const handleLogout = async () => {
    mutation.mutate();
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
      <HamburgerMenuButton onClick={() => setOpen(!open)} />
      <UserMenu>
        <li>
          <button type="button" onClick={() => handleLanguageChange()}>
            <BsGlobe />
            {i18n.language === "en" ? "th" : "en"}
          </button>
        </li>
        <li>
          {!userLoading ? (
            isLoggedIn ? (
              <div className="user-menu-item">
                {user.is_owner ? (
                  <Link className="upload-room" to="/rooms/upload">
                    Upload Room
                  </Link>
                ) : null}
                <Link to="/">My Profile</Link>
                <button onClick={handleLogout}>Logout</button>
                <ToastContainer />
              </div>
            ) : (
              <Link to="/login" className="log-in">
                sign in <BsChevronRight />
              </Link>
            )
          ) : null}
        </li>
      </UserMenu>
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
    justify-content: space-between;
    padding: 0 3em;
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

// const UtilMenu = styled.ul`
//   display: flex;
//   align-items: center;

//   ${({ theme }) => theme.breakpoints.down("lg")} {
//     display: none;
//   }

//   button {
//     margin-left: 0.5em;
//     letter-spacing: 0.1em;
//     font-size: 1.125rem;
//     text-transform: uppercase;
//     font-family: ${({ theme }) => theme.fontFamily.robotoMono};
//   }
// `;

const UserMenu = styled.ul`
  display: flex;
  gap: 1em;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }

  li {
    display: flex;

    button {
      display: flex;
      align-items: center;
      font-family: ${({ theme }) => theme.fontFamily.robotoMono};
      text-transform: uppercase;
      font-size: 1rem;

      svg {
        margin-right: 0.5em;
      }
    }

    a {
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fontFamily.robotoMono};
      font-size: 1rem;
      display: flex;
      align-items: center;
    }

    .user-menu-item {
      display: flex;
      gap: 1em;

      .upload-room {
        background-color: ${({ theme }) => theme.color.black};
        color: ${({ theme }) => theme.color.white};
        padding: 0.5em 1em;
      }
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
