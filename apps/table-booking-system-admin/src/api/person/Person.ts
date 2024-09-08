import { ReservationBooking } from "../reservationBooking/ReservationBooking";

export type Person = {
  createdAt: Date;
  id: string;
  reservationBookings?: Array<ReservationBooking>;
  updatedAt: Date;
};
