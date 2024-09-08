import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeeklyOpeningHoursService } from "./weeklyOpeningHours.service";
import { WeeklyOpeningHoursControllerBase } from "./base/weeklyOpeningHours.controller.base";

@swagger.ApiTags("weeklyOpeningHours")
@common.Controller("weeklyOpeningHours")
export class WeeklyOpeningHoursController extends WeeklyOpeningHoursControllerBase {
  constructor(protected readonly service: WeeklyOpeningHoursService) {
    super(service);
  }
}
