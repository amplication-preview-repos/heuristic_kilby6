import { Module } from "@nestjs/common";
import { TableGroupModuleBase } from "./base/tableGroup.module.base";
import { TableGroupService } from "./tableGroup.service";
import { TableGroupController } from "./tableGroup.controller";
import { TableGroupResolver } from "./tableGroup.resolver";

@Module({
  imports: [TableGroupModuleBase],
  controllers: [TableGroupController],
  providers: [TableGroupService, TableGroupResolver],
  exports: [TableGroupService],
})
export class TableGroupModule {}
