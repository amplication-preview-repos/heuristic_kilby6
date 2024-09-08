import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReservationBookingServiceBase } from "./base/reservationBooking.service.base";

@Injectable()
export class ReservationBookingService extends ReservationBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
