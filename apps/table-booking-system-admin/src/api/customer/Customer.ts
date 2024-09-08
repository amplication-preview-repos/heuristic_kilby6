import { Booking } from "../booking/Booking";
import { Reservation } from "../reservation/Reservation";

export type Customer = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
