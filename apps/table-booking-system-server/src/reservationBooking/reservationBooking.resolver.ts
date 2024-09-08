import * as graphql from "@nestjs/graphql";
import { ReservationBookingResolverBase } from "./base/reservationBooking.resolver.base";
import { ReservationBooking } from "./base/ReservationBooking";
import { ReservationBookingService } from "./reservationBooking.service";

@graphql.Resolver(() => ReservationBooking)
export class ReservationBookingResolver extends ReservationBookingResolverBase {
  constructor(protected readonly service: ReservationBookingService) {
    super(service);
  }
}
