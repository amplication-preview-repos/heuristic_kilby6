import * as graphql from "@nestjs/graphql";
import { WeeklyOpeningHoursResolverBase } from "./base/weeklyOpeningHours.resolver.base";
import { WeeklyOpeningHours } from "./base/WeeklyOpeningHours";
import { WeeklyOpeningHoursService } from "./weeklyOpeningHours.service";

@graphql.Resolver(() => WeeklyOpeningHours)
export class WeeklyOpeningHoursResolver extends WeeklyOpeningHoursResolverBase {
  constructor(protected readonly service: WeeklyOpeningHoursService) {
    super(service);
  }
}
