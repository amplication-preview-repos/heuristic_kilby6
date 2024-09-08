import { SortOrder } from "../../util/SortOrder";

export type ReservationBookingOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  numberOfPersons?: SortOrder;
  personId?: SortOrder;
  restaurantId?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
