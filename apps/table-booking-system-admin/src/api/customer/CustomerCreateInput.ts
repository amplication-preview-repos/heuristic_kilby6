import { BookingCreateNestedManyWithoutCustomersInput } from "./BookingCreateNestedManyWithoutCustomersInput";
import { ReservationCreateNestedManyWithoutCustomersInput } from "./ReservationCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  bookings?: BookingCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  reservations?: ReservationCreateNestedManyWithoutCustomersInput;
};
