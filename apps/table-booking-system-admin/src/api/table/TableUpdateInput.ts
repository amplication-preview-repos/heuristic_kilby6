import { BookingUpdateManyWithoutTablesInput } from "./BookingUpdateManyWithoutTablesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TableUpdateInput = {
  bookings?: BookingUpdateManyWithoutTablesInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  seatingCapacity?: number | null;
  tableNumber?: number | null;
};
