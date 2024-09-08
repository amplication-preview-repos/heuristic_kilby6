/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SpecialHours } from "./SpecialHours";
import { SpecialHoursCountArgs } from "./SpecialHoursCountArgs";
import { SpecialHoursFindManyArgs } from "./SpecialHoursFindManyArgs";
import { SpecialHoursFindUniqueArgs } from "./SpecialHoursFindUniqueArgs";
import { DeleteSpecialHoursArgs } from "./DeleteSpecialHoursArgs";
import { SpecialHoursService } from "../specialHours.service";
@graphql.Resolver(() => SpecialHours)
export class SpecialHoursResolverBase {
  constructor(protected readonly service: SpecialHoursService) {}

  async _specialHoursItemsMeta(
    @graphql.Args() args: SpecialHoursCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SpecialHours])
  async specialHoursItems(
    @graphql.Args() args: SpecialHoursFindManyArgs
  ): Promise<SpecialHours[]> {
    return this.service.specialHoursItems(args);
  }

  @graphql.Query(() => SpecialHours, { nullable: true })
  async specialHours(
    @graphql.Args() args: SpecialHoursFindUniqueArgs
  ): Promise<SpecialHours | null> {
    const result = await this.service.specialHours(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SpecialHours)
  async deleteSpecialHours(
    @graphql.Args() args: DeleteSpecialHoursArgs
  ): Promise<SpecialHours | null> {
    try {
      return await this.service.deleteSpecialHours(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
