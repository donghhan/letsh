import { instance } from "./axios";

export const getAllCategories = async () => {
  const response = await instance.get("categories/");
  const categories = response.data;
  const categoriesWithIcons = categories.map((category: any) => {
    const iconName = `${category.name}.svg` || null;
    const imageUrl = `src/assets/upload_room/categories/${iconName}`;
    return { ...category, icon: imageUrl };
  });
  return categoriesWithIcons;
};
