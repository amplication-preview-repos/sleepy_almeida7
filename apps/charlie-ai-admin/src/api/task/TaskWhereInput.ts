import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  assignedTo?: StringNullableFilter;
  assignedUser?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
