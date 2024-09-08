import { ReservationBookingCreateNestedManyWithoutPeopleInput } from "./ReservationBookingCreateNestedManyWithoutPeopleInput";

export type PersonCreateInput = {
  reservationBookings?: ReservationBookingCreateNestedManyWithoutPeopleInput;
};
