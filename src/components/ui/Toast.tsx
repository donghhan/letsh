import styled from "styled-components";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";

interface ToastProp {
  text: string;
}

export default function Toast({ text }: ToastProp) {
  return <ToastWrapper></ToastWrapper>;
}

const ToastWrapper = styled.div`
  width: 300px;
  height: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
