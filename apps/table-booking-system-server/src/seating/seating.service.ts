import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SeatingServiceBase } from "./base/seating.service.base";

@Injectable()
export class SeatingService extends SeatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
