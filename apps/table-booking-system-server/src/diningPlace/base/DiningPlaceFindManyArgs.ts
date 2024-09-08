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
import { DiningPlaceWhereInput } from "./DiningPlaceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DiningPlaceOrderByInput } from "./DiningPlaceOrderByInput";

@ArgsType()
class DiningPlaceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DiningPlaceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DiningPlaceWhereInput, { nullable: true })
  @Type(() => DiningPlaceWhereInput)
  where?: DiningPlaceWhereInput;

  @ApiProperty({
    required: false,
    type: [DiningPlaceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DiningPlaceOrderByInput], { nullable: true })
  @Type(() => DiningPlaceOrderByInput)
  orderBy?: Array<DiningPlaceOrderByInput>;

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

export { DiningPlaceFindManyArgs as DiningPlaceFindManyArgs };
