import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../../api/categoriesApi";
import { RoomCategoriesInterface } from "../../../api/interfaces/categories.interface";
import Button from "../../ui/button/Button";

export default function TopPlacesCategory(): JSX.Element {
  const { isLoading, data } = useQuery<RoomCategoriesInterface[]>(
    ["roomCategories"],
    getAllCategories
  );

  return (
    <CategoryContainer>
      <CategoryList>
        <li>
          <Button text="All Places" animation={true} />
        </li>
        {data?.map((i) => (
          <li key={i.name}>
            <Button
              text={i.name.charAt(0).toUpperCase() + i.name.slice(1)}
              animation={true}
            />
          </li>
        ))}
      </CategoryList>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.aside`
  min-width: 300px;
  height: fit-content;
`;

const CategoryList = styled.ul`
  li {
    margin: 2em 0;

    button {
      font-size: 1.5rem;
    }
  }
`;
