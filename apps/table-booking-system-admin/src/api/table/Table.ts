import { Booking } from "../booking/Booking";
import { Restaurant } from "../restaurant/Restaurant";

export type Table = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  restaurant?: Restaurant | null;
  seatingCapacity: number | null;
  tableNumber: number | null;
  updatedAt: Date;
};
