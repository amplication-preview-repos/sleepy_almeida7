import { User } from "../user/User";

export type Interaction = {
  content: string | null;
  createdAt: Date;
  id: string;
  interactionType?: "Option1" | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
