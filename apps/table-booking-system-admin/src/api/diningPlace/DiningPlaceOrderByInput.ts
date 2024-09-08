import { SortOrder } from "../../util/SortOrder";

export type DiningPlaceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};
