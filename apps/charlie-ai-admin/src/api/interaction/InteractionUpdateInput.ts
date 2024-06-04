import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InteractionUpdateInput = {
  content?: string | null;
  interactionType?: "Option1" | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
