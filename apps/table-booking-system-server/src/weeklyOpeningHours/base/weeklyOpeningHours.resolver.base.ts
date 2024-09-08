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
import { WeeklyOpeningHours } from "./WeeklyOpeningHours";
import { WeeklyOpeningHoursCountArgs } from "./WeeklyOpeningHoursCountArgs";
import { WeeklyOpeningHoursFindManyArgs } from "./WeeklyOpeningHoursFindManyArgs";
import { WeeklyOpeningHoursFindUniqueArgs } from "./WeeklyOpeningHoursFindUniqueArgs";
import { DeleteWeeklyOpeningHoursArgs } from "./DeleteWeeklyOpeningHoursArgs";
import { WeeklyOpeningHoursService } from "../weeklyOpeningHours.service";
@graphql.Resolver(() => WeeklyOpeningHours)
export class WeeklyOpeningHoursResolverBase {
  constructor(protected readonly service: WeeklyOpeningHoursService) {}

  async _weeklyOpeningHoursItemsMeta(
    @graphql.Args() args: WeeklyOpeningHoursCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WeeklyOpeningHours])
  async weeklyOpeningHoursItems(
    @graphql.Args() args: WeeklyOpeningHoursFindManyArgs
  ): Promise<WeeklyOpeningHours[]> {
    return this.service.weeklyOpeningHoursItems(args);
  }

  @graphql.Query(() => WeeklyOpeningHours, { nullable: true })
  async weeklyOpeningHours(
    @graphql.Args() args: WeeklyOpeningHoursFindUniqueArgs
  ): Promise<WeeklyOpeningHours | null> {
    const result = await this.service.weeklyOpeningHours(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WeeklyOpeningHours)
  async deleteWeeklyOpeningHours(
    @graphql.Args() args: DeleteWeeklyOpeningHoursArgs
  ): Promise<WeeklyOpeningHours | null> {
    try {
      return await this.service.deleteWeeklyOpeningHours(args);
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
