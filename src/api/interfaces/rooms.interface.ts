export interface ISimpleRoom {
  name: string;
  thumbnail?: string;
  review?: number;
  price_per_night: number;
  address: string;
}

export interface ICarouselRoomProp {
  room_type: string;
  thumbnail?: string;
  total_rooms: number;
}
