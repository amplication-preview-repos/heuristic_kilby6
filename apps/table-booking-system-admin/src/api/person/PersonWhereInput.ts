import { StringFilter } from "../../util/StringFilter";
import { ReservationBookingListRelationFilter } from "../reservationBooking/ReservationBookingListRelationFilter";

export type PersonWhereInput = {
  id?: StringFilter;
  reservationBookings?: ReservationBookingListRelationFilter;
};
