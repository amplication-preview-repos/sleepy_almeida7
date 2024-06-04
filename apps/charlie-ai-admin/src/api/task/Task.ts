export type Task = {
  assignedTo: string | null;
  assignedUser: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
