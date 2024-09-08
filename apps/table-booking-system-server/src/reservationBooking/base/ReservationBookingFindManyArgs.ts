/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReservationBookingWhereInput } from "./ReservationBookingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReservationBookingOrderByInput } from "./ReservationBookingOrderByInput";

@ArgsType()
class ReservationBookingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReservationBookingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReservationBookingWhereInput, { nullable: true })
  @Type(() => ReservationBookingWhereInput)
  where?: ReservationBookingWhereInput;

  @ApiProperty({
    required: false,
    type: [ReservationBookingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReservationBookingOrderByInput], { nullable: true })
  @Type(() => ReservationBookingOrderByInput)
  orderBy?: Array<ReservationBookingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ReservationBookingFindManyArgs as ReservationBookingFindManyArgs };
