import { Restaurant } from "../restaurant/Restaurant";

export type Seating = {
  createdAt: Date;
  id: string;
  restaurant?: Restaurant | null;
  seatingCapacity: number | null;
  tableNumber: number | null;
  updatedAt: Date;
};
