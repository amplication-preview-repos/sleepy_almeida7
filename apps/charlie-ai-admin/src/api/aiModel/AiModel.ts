import { JsonValue } from "type-fest";

export type AiModel = {
  configuration: JsonValue;
  createdAt: Date;
  id: string;
  modelName: string | null;
  updatedAt: Date;
  version: string | null;
};
