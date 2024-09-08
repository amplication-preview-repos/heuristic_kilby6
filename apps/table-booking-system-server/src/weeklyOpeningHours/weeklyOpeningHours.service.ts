import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeeklyOpeningHoursServiceBase } from "./base/weeklyOpeningHours.service.base";

@Injectable()
export class WeeklyOpeningHoursService extends WeeklyOpeningHoursServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
