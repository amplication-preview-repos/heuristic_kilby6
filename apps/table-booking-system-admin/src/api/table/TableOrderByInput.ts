import { SortOrder } from "../../util/SortOrder";

export type TableOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  restaurantId?: SortOrder;
  seatingCapacity?: SortOrder;
  tableNumber?: SortOrder;
  updatedAt?: SortOrder;
};
