/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PersonService } from "../person.service";
import { PersonCreateInput } from "./PersonCreateInput";
import { Person } from "./Person";
import { PersonFindManyArgs } from "./PersonFindManyArgs";
import { PersonWhereUniqueInput } from "./PersonWhereUniqueInput";
import { PersonUpdateInput } from "./PersonUpdateInput";
import { ReservationBookingFindManyArgs } from "../../reservationBooking/base/ReservationBookingFindManyArgs";
import { ReservationBooking } from "../../reservationBooking/base/ReservationBooking";
import { ReservationBookingWhereUniqueInput } from "../../reservationBooking/base/ReservationBookingWhereUniqueInput";

export class PersonControllerBase {
  constructor(protected readonly service: PersonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Person })
  async createPerson(@common.Body() data: PersonCreateInput): Promise<Person> {
    return await this.service.createPerson({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Person] })
  @ApiNestedQuery(PersonFindManyArgs)
  async people(@common.Req() request: Request): Promise<Person[]> {
    const args = plainToClass(PersonFindManyArgs, request.query);
    return this.service.people({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async person(
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Person | null> {
    const result = await this.service.person({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePerson(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() data: PersonUpdateInput
  ): Promise<Person | null> {
    try {
      return await this.service.updatePerson({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePerson(
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Person | null> {
    try {
      return await this.service.deletePerson({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/reservationBookings")
  @ApiNestedQuery(ReservationBookingFindManyArgs)
  async findReservationBookings(
    @common.Req() request: Request,
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<ReservationBooking[]> {
    const query = plainToClass(ReservationBookingFindManyArgs, request.query);
    const results = await this.service.findReservationBookings(params.id, {
      ...query,
      select: {
        createdAt: true,
        endTime: true,
        id: true,
        numberOfPersons: true,

        person: {
          select: {
            id: true,
          },
        },

        restaurant: {
          select: {
            id: true,
          },
        },

        startTime: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reservationBookings")
  async connectReservationBookings(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: ReservationBookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservationBookings: {
        connect: body,
      },
    };
    await this.service.updatePerson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reservationBookings")
  async updateReservationBookings(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: ReservationBookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservationBookings: {
        set: body,
      },
    };
    await this.service.updatePerson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reservationBookings")
  async disconnectReservationBookings(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() body: ReservationBookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservationBookings: {
        disconnect: body,
      },
    };
    await this.service.updatePerson({
      where: params,
      data,
      select: { id: true },
    });
  }
}
