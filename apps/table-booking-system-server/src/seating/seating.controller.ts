import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SeatingService } from "./seating.service";
import { SeatingControllerBase } from "./base/seating.controller.base";

@swagger.ApiTags("seatings")
@common.Controller("seatings")
export class SeatingController extends SeatingControllerBase {
  constructor(protected readonly service: SeatingService) {
    super(service);
  }
}
