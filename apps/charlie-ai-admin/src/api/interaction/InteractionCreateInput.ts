import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InteractionCreateInput = {
  content?: string | null;
  interactionType?: "Option1" | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
