import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InteractionWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  interactionType?: "Option1";
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
