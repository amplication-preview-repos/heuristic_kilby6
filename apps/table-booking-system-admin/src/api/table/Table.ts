import { Booking } from "../booking/Booking";
import { Reservation } from "../reservation/Reservation";
import { Restaurant } from "../restaurant/Restaurant";
import { TimeSlot } from "../timeSlot/TimeSlot";

export type Table = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  reservations?: Array<Reservation>;
  restaurant?: Restaurant | null;
  seatingCapacity: number | null;
  tableNumber: number | null;
  timeSlots?: Array<TimeSlot>;
  updatedAt: Date;
};
