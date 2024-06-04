import { InputJsonValue } from "../../types";

export type AiModelCreateInput = {
  configuration?: InputJsonValue;
  modelName?: string | null;
  version?: string | null;
};
