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
import { TableService } from "../table.service";
import { TableCreateInput } from "./TableCreateInput";
import { Table } from "./Table";
import { TableFindManyArgs } from "./TableFindManyArgs";
import { TableWhereUniqueInput } from "./TableWhereUniqueInput";
import { TableUpdateInput } from "./TableUpdateInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";

export class TableControllerBase {
  constructor(protected readonly service: TableService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Table })
  async createTable(@common.Body() data: TableCreateInput): Promise<Table> {
    return await this.service.createTable({
      data: {
        ...data,

        restaurant: data.restaurant
          ? {
              connect: data.restaurant,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        restaurant: {
          select: {
            id: true,
          },
        },

        seatingCapacity: true,
        tableNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Table] })
  @ApiNestedQuery(TableFindManyArgs)
  async tables(@common.Req() request: Request): Promise<Table[]> {
    const args = plainToClass(TableFindManyArgs, request.query);
    return this.service.tables({
      ...args,
      select: {
        createdAt: true,
        id: true,

        restaurant: {
          select: {
            id: true,
          },
        },

        seatingCapacity: true,
        tableNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Table })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async table(
    @common.Param() params: TableWhereUniqueInput
  ): Promise<Table | null> {
    const result = await this.service.table({
      where: params,
      select: {
        createdAt: true,
        id: true,

        restaurant: {
          select: {
            id: true,
          },
        },

        seatingCapacity: true,
        tableNumber: true,
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
  @swagger.ApiOkResponse({ type: Table })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTable(
    @common.Param() params: TableWhereUniqueInput,
    @common.Body() data: TableUpdateInput
  ): Promise<Table | null> {
    try {
      return await this.service.updateTable({
        where: params,
        data: {
          ...data,

          restaurant: data.restaurant
            ? {
                connect: data.restaurant,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          restaurant: {
            select: {
              id: true,
            },
          },

          seatingCapacity: true,
          tableNumber: true,
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
  @swagger.ApiOkResponse({ type: Table })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTable(
    @common.Param() params: TableWhereUniqueInput
  ): Promise<Table | null> {
    try {
      return await this.service.deleteTable({
        where: params,
        select: {
          createdAt: true,
          id: true,

          restaurant: {
            select: {
              id: true,
            },
          },

          seatingCapacity: true,
          tableNumber: true,
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

  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  async findBookings(
    @common.Req() request: Request,
    @common.Param() params: TableWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        bookingTime: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,

        table: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/bookings")
  async connectBookings(
    @common.Param() params: TableWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updateTable({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  async updateBookings(
    @common.Param() params: TableWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updateTable({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  async disconnectBookings(
    @common.Param() params: TableWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updateTable({
      where: params,
      data,
      select: { id: true },
    });
  }
}
