import { Module } from "@nestjs/common";
import { WeeklyOpeningHoursModuleBase } from "./base/weeklyOpeningHours.module.base";
import { WeeklyOpeningHoursService } from "./weeklyOpeningHours.service";
import { WeeklyOpeningHoursController } from "./weeklyOpeningHours.controller";
import { WeeklyOpeningHoursResolver } from "./weeklyOpeningHours.resolver";

@Module({
  imports: [WeeklyOpeningHoursModuleBase],
  controllers: [WeeklyOpeningHoursController],
  providers: [WeeklyOpeningHoursService, WeeklyOpeningHoursResolver],
  exports: [WeeklyOpeningHoursService],
})
export class WeeklyOpeningHoursModule {}
