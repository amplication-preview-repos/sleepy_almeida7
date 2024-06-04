/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InteractionWhereUniqueInput } from "../../interaction/base/InteractionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InteractionUpdateManyWithoutUsersInput {
  @Field(() => [InteractionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InteractionWhereUniqueInput],
  })
  connect?: Array<InteractionWhereUniqueInput>;

  @Field(() => [InteractionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InteractionWhereUniqueInput],
  })
  disconnect?: Array<InteractionWhereUniqueInput>;

  @Field(() => [InteractionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InteractionWhereUniqueInput],
  })
  set?: Array<InteractionWhereUniqueInput>;
}

export { InteractionUpdateManyWithoutUsersInput as InteractionUpdateManyWithoutUsersInput };