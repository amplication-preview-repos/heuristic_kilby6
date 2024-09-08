import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SeatingWhereInput = {
  id?: StringFilter;
  restaurant?: RestaurantWhereUniqueInput;
  seatingCapacity?: IntNullableFilter;
  tableNumber?: IntNullableFilter;
};
