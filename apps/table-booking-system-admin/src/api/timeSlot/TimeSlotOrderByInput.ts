import { SortOrder } from "../../util/SortOrder";

export type TimeSlotOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  tableId?: SortOrder;
  updatedAt?: SortOrder;
};
