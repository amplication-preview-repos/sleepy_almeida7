import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InteractionListRelationFilter } from "../interaction/InteractionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  interactions?: InteractionListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
