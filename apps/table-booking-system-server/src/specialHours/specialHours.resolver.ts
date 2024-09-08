import * as graphql from "@nestjs/graphql";
import { SpecialHoursResolverBase } from "./base/specialHours.resolver.base";
import { SpecialHours } from "./base/SpecialHours";
import { SpecialHoursService } from "./specialHours.service";

@graphql.Resolver(() => SpecialHours)
export class SpecialHoursResolver extends SpecialHoursResolverBase {
  constructor(protected readonly service: SpecialHoursService) {
    super(service);
  }
}
