import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AiModelWhereInput = {
  configuration?: JsonFilter;
  id?: StringFilter;
  modelName?: StringNullableFilter;
  version?: StringNullableFilter;
};
