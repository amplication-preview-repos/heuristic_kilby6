import * as graphql from "@nestjs/graphql";
import { SeatingResolverBase } from "./base/seating.resolver.base";
import { Seating } from "./base/Seating";
import { SeatingService } from "./seating.service";

@graphql.Resolver(() => Seating)
export class SeatingResolver extends SeatingResolverBase {
  constructor(protected readonly service: SeatingService) {
    super(service);
  }
}
