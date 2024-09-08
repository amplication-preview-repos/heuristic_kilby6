import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationBookingListRelationFilter } from "../reservationBooking/ReservationBookingListRelationFilter";
import { SeatingListRelationFilter } from "../seating/SeatingListRelationFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type RestaurantWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  reservationBookings?: ReservationBookingListRelationFilter;
  seatings?: SeatingListRelationFilter;
  tables?: TableListRelationFilter;
};
