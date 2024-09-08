import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
