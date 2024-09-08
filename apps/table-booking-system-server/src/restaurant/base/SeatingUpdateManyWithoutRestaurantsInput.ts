/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SeatingWhereUniqueInput } from "../../seating/base/SeatingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SeatingUpdateManyWithoutRestaurantsInput {
  @Field(() => [SeatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SeatingWhereUniqueInput],
  })
  connect?: Array<SeatingWhereUniqueInput>;

  @Field(() => [SeatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SeatingWhereUniqueInput],
  })
  disconnect?: Array<SeatingWhereUniqueInput>;

  @Field(() => [SeatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SeatingWhereUniqueInput],
  })
  set?: Array<SeatingWhereUniqueInput>;
}

export { SeatingUpdateManyWithoutRestaurantsInput as SeatingUpdateManyWithoutRestaurantsInput };
