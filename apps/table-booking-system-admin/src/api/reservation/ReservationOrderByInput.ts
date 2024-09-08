import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  tableId?: SortOrder;
  timeSlotId?: SortOrder;
  updatedAt?: SortOrder;
};
