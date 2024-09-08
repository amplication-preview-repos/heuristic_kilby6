import { ReservationBooking as TReservationBooking } from "../api/reservationBooking/ReservationBooking";

export const RESERVATIONBOOKING_TITLE_FIELD = "id";

export const ReservationBookingTitle = (
  record: TReservationBooking
): string => {
  return record.id?.toString() || String(record.id);
};
