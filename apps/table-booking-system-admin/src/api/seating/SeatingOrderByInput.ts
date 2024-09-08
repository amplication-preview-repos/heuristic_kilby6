import { SortOrder } from "../../util/SortOrder";

export type SeatingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  restaurantId?: SortOrder;
  seatingCapacity?: SortOrder;
  tableNumber?: SortOrder;
  updatedAt?: SortOrder;
};
