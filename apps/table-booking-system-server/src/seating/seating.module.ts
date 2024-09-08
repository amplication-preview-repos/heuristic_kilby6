import { Module } from "@nestjs/common";
import { SeatingModuleBase } from "./base/seating.module.base";
import { SeatingService } from "./seating.service";
import { SeatingController } from "./seating.controller";
import { SeatingResolver } from "./seating.resolver";

@Module({
  imports: [SeatingModuleBase],
  controllers: [SeatingController],
  providers: [SeatingService, SeatingResolver],
  exports: [SeatingService],
})
export class SeatingModule {}
