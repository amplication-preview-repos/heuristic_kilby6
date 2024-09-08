import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TableGroupService } from "./tableGroup.service";
import { TableGroupControllerBase } from "./base/tableGroup.controller.base";

@swagger.ApiTags("tableGroups")
@common.Controller("tableGroups")
export class TableGroupController extends TableGroupControllerBase {
  constructor(protected readonly service: TableGroupService) {
    super(service);
  }
}
