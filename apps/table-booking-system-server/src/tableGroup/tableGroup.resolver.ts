import * as graphql from "@nestjs/graphql";
import { TableGroupResolverBase } from "./base/tableGroup.resolver.base";
import { TableGroup } from "./base/TableGroup";
import { TableGroupService } from "./tableGroup.service";

@graphql.Resolver(() => TableGroup)
export class TableGroupResolver extends TableGroupResolverBase {
  constructor(protected readonly service: TableGroupService) {
    super(service);
  }
}
