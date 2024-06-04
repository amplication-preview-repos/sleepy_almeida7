import { SortOrder } from "../../util/SortOrder";

export type AiModelOrderByInput = {
  configuration?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  modelName?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
