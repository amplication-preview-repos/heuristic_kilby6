import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TimeSlotListRelationFilter } from "../timeSlot/TimeSlotListRelationFilter";

export type TableWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  reservations?: ReservationListRelationFilter;
  restaurant?: RestaurantWhereUniqueInput;
  seatingCapacity?: IntNullableFilter;
  tableNumber?: IntNullableFilter;
  timeSlots?: TimeSlotListRelationFilter;
};
