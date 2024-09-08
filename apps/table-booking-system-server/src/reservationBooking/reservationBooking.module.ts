import { Module } from "@nestjs/common";
import { ReservationBookingModuleBase } from "./base/reservationBooking.module.base";
import { ReservationBookingService } from "./reservationBooking.service";
import { ReservationBookingController } from "./reservationBooking.controller";
import { ReservationBookingResolver } from "./reservationBooking.resolver";

@Module({
  imports: [ReservationBookingModuleBase],
  controllers: [ReservationBookingController],
  providers: [ReservationBookingService, ReservationBookingResolver],
  exports: [ReservationBookingService],
})
export class ReservationBookingModule {}
