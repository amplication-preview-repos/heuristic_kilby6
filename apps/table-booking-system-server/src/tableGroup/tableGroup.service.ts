import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TableGroupServiceBase } from "./base/tableGroup.service.base";

@Injectable()
export class TableGroupService extends TableGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
