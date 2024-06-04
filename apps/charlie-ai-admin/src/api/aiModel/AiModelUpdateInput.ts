import { InputJsonValue } from "../../types";

export type AiModelUpdateInput = {
  configuration?: InputJsonValue;
  modelName?: string | null;
  version?: string | null;
};
