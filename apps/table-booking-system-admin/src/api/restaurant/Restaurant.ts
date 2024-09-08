import { ReservationBooking } from "../reservationBooking/ReservationBooking";
import { Seating } from "../seating/Seating";
import { Table } from "../table/Table";

export type Restaurant = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  reservationBookings?: Array<ReservationBooking>;
  seatings?: Array<Seating>;
  tables?: Array<Table>;
  updatedAt: Date;
};
