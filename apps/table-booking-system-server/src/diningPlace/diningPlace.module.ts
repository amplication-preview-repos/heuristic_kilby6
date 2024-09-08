import { Module } from "@nestjs/common";
import { DiningPlaceModuleBase } from "./base/diningPlace.module.base";
import { DiningPlaceService } from "./diningPlace.service";
import { DiningPlaceController } from "./diningPlace.controller";
import { DiningPlaceResolver } from "./diningPlace.resolver";

@Module({
  imports: [DiningPlaceModuleBase],
  controllers: [DiningPlaceController],
  providers: [DiningPlaceService, DiningPlaceResolver],
  exports: [DiningPlaceService],
})
export class DiningPlaceModule {}
