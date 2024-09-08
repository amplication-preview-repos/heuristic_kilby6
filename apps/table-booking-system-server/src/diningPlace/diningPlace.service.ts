import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiningPlaceServiceBase } from "./base/diningPlace.service.base";

@Injectable()
export class DiningPlaceService extends DiningPlaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
