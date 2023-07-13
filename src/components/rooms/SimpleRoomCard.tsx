import styled from "styled-components";
import 
import { useQuery } from "@tanstack/react-query";

export default function SimpleRoomCard(): JSX.Element {
  const [isLoading, data: simpleRoomData] = useQuery()
  return <CardWrapper></CardWrapper>;
}

const CardWrapper = styled.div`
  max-width: 400px;
  height: fit-content;
  border: 1px solid red;
`;
