import { QueryFunctionContext } from "react-query";
import { instance } from "../axios";

export async function GetAllRooms() {
  return await instance.get("rooms/");
}

export async function GetRoomDetail({ queryKey }: QueryFunctionContext) {
  const [_, roomPk] = queryKey;
  return await instance.get(`rooms/${roomPk}`);
}
