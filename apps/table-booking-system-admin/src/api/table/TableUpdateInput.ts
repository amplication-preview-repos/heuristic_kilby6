import { BookingUpdateManyWithoutTablesInput } from "./BookingUpdateManyWithoutTablesInput";
import { ReservationUpdateManyWithoutTablesInput } from "./ReservationUpdateManyWithoutTablesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { TimeSlotUpdateManyWithoutTablesInput } from "./TimeSlotUpdateManyWithoutTablesInput";

export type TableUpdateInput = {
  bookings?: BookingUpdateManyWithoutTablesInput;
  reservations?: ReservationUpdateManyWithoutTablesInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  seatingCapacity?: number | null;
  tableNumber?: number | null;
  timeSlots?: TimeSlotUpdateManyWithoutTablesInput;
};
