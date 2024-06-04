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
import { InteractionWhereUniqueInput } from "./InteractionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InteractionUpdateInput } from "./InteractionUpdateInput";

@ArgsType()
class UpdateInteractionArgs {
  @ApiProperty({
    required: true,
    type: () => InteractionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InteractionWhereUniqueInput)
  @Field(() => InteractionWhereUniqueInput, { nullable: false })
  where!: InteractionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InteractionUpdateInput,
  })
  @ValidateNested()
  @Type(() => InteractionUpdateInput)
  @Field(() => InteractionUpdateInput, { nullable: false })
  data!: InteractionUpdateInput;
}

export { UpdateInteractionArgs as UpdateInteractionArgs };
