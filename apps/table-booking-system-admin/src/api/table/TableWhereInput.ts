import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TableWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  restaurant?: RestaurantWhereUniqueInput;
  seatingCapacity?: IntNullableFilter;
  tableNumber?: IntNullableFilter;
};
