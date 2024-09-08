import * as graphql from "@nestjs/graphql";
import { DiningPlaceResolverBase } from "./base/diningPlace.resolver.base";
import { DiningPlace } from "./base/DiningPlace";
import { DiningPlaceService } from "./diningPlace.service";

@graphql.Resolver(() => DiningPlace)
export class DiningPlaceResolver extends DiningPlaceResolverBase {
  constructor(protected readonly service: DiningPlaceService) {
    super(service);
  }
}
