import { ReservationBookingWhereInput } from "./ReservationBookingWhereInput";
import { ReservationBookingOrderByInput } from "./ReservationBookingOrderByInput";

export type ReservationBookingFindManyArgs = {
  where?: ReservationBookingWhereInput;
  orderBy?: Array<ReservationBookingOrderByInput>;
  skip?: number;
  take?: number;
};
