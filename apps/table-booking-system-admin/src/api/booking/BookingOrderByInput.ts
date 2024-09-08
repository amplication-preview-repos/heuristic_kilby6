import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingTime?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  tableId?: SortOrder;
  updatedAt?: SortOrder;
};
