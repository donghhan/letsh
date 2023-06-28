import styled from "styled-components";
import { RoomCategoriesInterface } from "../../../api/interfaces/categories.interface";

interface RoomCategoryProp extends RoomCategoriesInterface {
  to: string;
}

export default function TopPlacesCard({
  name,
  to,
}: RoomCategoryProp): JSX.Element {
  return <CardWrapper></CardWrapper>;
}

const CardWrapper = styled.div``;
