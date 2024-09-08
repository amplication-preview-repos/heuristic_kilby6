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
import { SpecialHoursWhereInput } from "./SpecialHoursWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SpecialHoursOrderByInput } from "./SpecialHoursOrderByInput";

@ArgsType()
class SpecialHoursFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SpecialHoursWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SpecialHoursWhereInput, { nullable: true })
  @Type(() => SpecialHoursWhereInput)
  where?: SpecialHoursWhereInput;

  @ApiProperty({
    required: false,
    type: [SpecialHoursOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SpecialHoursOrderByInput], { nullable: true })
  @Type(() => SpecialHoursOrderByInput)
  orderBy?: Array<SpecialHoursOrderByInput>;

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

export { SpecialHoursFindManyArgs as SpecialHoursFindManyArgs };
