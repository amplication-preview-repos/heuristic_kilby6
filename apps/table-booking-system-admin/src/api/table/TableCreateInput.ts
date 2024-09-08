import { BookingCreateNestedManyWithoutTablesInput } from "./BookingCreateNestedManyWithoutTablesInput";
import { ReservationCreateNestedManyWithoutTablesInput } from "./ReservationCreateNestedManyWithoutTablesInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { TimeSlotCreateNestedManyWithoutTablesInput } from "./TimeSlotCreateNestedManyWithoutTablesInput";

export type TableCreateInput = {
  bookings?: BookingCreateNestedManyWithoutTablesInput;
  reservations?: ReservationCreateNestedManyWithoutTablesInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  seatingCapacity?: number | null;
  tableNumber?: number | null;
  timeSlots?: TimeSlotCreateNestedManyWithoutTablesInput;
};
