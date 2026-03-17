export type RoomBadge = "Top Match" | "Nuevo" | "Verificado";

export type Room = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  details: string;
  roommates: number;
  wifi: boolean;
  availableLabel: string;
  badge?: RoomBadge;
};