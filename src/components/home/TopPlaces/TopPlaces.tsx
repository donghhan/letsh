import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import SimpleRoomCard from "../../rooms/SimpleRoomCard";
import TopPlacesCategory from "./TopPlacesCategory";
import { ISimpleRoom } from "../../../api/interfaces/rooms.interface";

export default function TopPlaces(): JSX.Element {
  // const { isLoading, data } = useQuery<ISimpleRoom>(["topPlaces"]);
  // console.log(data);
  return (
    <TopPlacesContainer>
      <TopPlacesCategory />
      <TopPlacesCardWrapper></TopPlacesCardWrapper>
    </TopPlacesContainer>
  );
}

const TopPlacesContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  height: fit-content;
  min-height: 400px;
  border: 1px solid orange;
  display: flex;
  gap: 5em;
`;

const TopPlacesCardWrapper = styled.div`
  height: fit-content;
  min-height: 400px;
  border: 1px solid brown;
`;
