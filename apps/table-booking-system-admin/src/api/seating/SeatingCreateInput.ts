import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type SeatingCreateInput = {
  restaurant?: RestaurantWhereUniqueInput | null;
  seatingCapacity?: number | null;
  tableNumber?: number | null;
};
