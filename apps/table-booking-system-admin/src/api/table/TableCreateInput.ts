import { BookingCreateNestedManyWithoutTablesInput } from "./BookingCreateNestedManyWithoutTablesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TableCreateInput = {
  bookings?: BookingCreateNestedManyWithoutTablesInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  seatingCapacity?: number | null;
  tableNumber?: number | null;
};
