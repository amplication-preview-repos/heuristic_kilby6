import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type SeatingUpdateInput = {
  restaurant?: RestaurantWhereUniqueInput | null;
  seatingCapacity?: number | null;
  tableNumber?: number | null;
};
