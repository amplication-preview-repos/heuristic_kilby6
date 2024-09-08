import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiningPlaceService } from "./diningPlace.service";
import { DiningPlaceControllerBase } from "./base/diningPlace.controller.base";

@swagger.ApiTags("diningPlaces")
@common.Controller("diningPlaces")
export class DiningPlaceController extends DiningPlaceControllerBase {
  constructor(protected readonly service: DiningPlaceService) {
    super(service);
  }
}
