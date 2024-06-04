import { InteractionUpdateManyWithoutUsersInput } from "./InteractionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  interactions?: InteractionUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
