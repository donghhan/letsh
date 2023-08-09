interface IAmenities {
  id: number;
  name: string;
}

interface ICategories {
  pk: number;
  name: string;
  icon?: string;
}

interface IRoomTypes {
  id: number;
  total_rooms: number;
  room_type: string;
}
