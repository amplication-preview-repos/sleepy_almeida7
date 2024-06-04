import { Interaction } from "../interaction/Interaction";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  interactions?: Array<Interaction>;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
