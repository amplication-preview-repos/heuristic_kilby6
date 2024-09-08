import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpecialHoursServiceBase } from "./base/specialHours.service.base";

@Injectable()
export class SpecialHoursService extends SpecialHoursServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
