import { Module } from "@nestjs/common";
import { SpecialHoursModuleBase } from "./base/specialHours.module.base";
import { SpecialHoursService } from "./specialHours.service";
import { SpecialHoursController } from "./specialHours.controller";
import { SpecialHoursResolver } from "./specialHours.resolver";

@Module({
  imports: [SpecialHoursModuleBase],
  controllers: [SpecialHoursController],
  providers: [SpecialHoursService, SpecialHoursResolver],
  exports: [SpecialHoursService],
})
export class SpecialHoursModule {}
