import { QueryFunctionContext } from "@tanstack/react-query";
import { instance } from "./axios";

export const getAllRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export async function GetRoomDetail({ queryKey }: QueryFunctionContext) {
  const [_, roomPk] = queryKey;
  return await instance.get(`rooms/${roomPk}`);
}

export async function GetAllAmenities() {
  return await instance.get(`rooms/amenities`);
}

export const getAllRoomTypes = () =>
  instance.get("rooms/room-types/").then((response) => response.data);
