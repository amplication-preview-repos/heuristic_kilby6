import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReservationBookingService } from "./reservationBooking.service";
import { ReservationBookingControllerBase } from "./base/reservationBooking.controller.base";

@swagger.ApiTags("reservationBookings")
@common.Controller("reservationBookings")
export class ReservationBookingController extends ReservationBookingControllerBase {
  constructor(protected readonly service: ReservationBookingService) {
    super(service);
  }
}
