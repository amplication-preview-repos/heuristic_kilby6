import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type ReservationBookingWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  numberOfPersons?: IntNullableFilter;
  person?: PersonWhereUniqueInput;
  restaurant?: RestaurantWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
};
