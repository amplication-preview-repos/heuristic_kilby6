import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpecialHoursService } from "./specialHours.service";
import { SpecialHoursControllerBase } from "./base/specialHours.controller.base";

@swagger.ApiTags("specialHours")
@common.Controller("specialHours")
export class SpecialHoursController extends SpecialHoursControllerBase {
  constructor(protected readonly service: SpecialHoursService) {
    super(service);
  }
}
