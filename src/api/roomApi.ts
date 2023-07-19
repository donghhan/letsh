import { QueryFunctionContext } from "@tanstack/react-query";
import { instance } from "./axios";

export const getAllRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export const getTopPlacesRoom = async () => {};

export async function GetRoomDetail({ queryKey }: QueryFunctionContext) {
  const [_, roomPk] = queryKey;
  return await instance.get(`rooms/${roomPk}`);
}

export async function GetAllAmenities() {
  return await instance.get(`rooms/amenities`);
}

export const getAllRoomTypes = async () => {
  const response = await instance.get("rooms/room-types/");
  const roomTypes = response.data;
  const roomTypesWithImages = roomTypes.map((roomType: any) => {
    const imageName = `${roomType.room_type}.jpg` || null;
    const imageUrl = `src/assets/room_types/${imageName}`;
    return {
      ...roomType,
      thumbnail: imageUrl,
    };
  });
  return roomTypesWithImages;
};

export const getRoomType = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomTypePk] = queryKey;
  return instance
    .get(`rooms/room-types/${roomTypePk}/`)
    .then((response) => response.data);
};
