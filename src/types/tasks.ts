export type TaskStatus = "todo" | "in_progress" | "done";

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  board_id: string;
  created_by: string;
  created_at: string;
  updated_at?: string;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  status?: TaskStatus;
}

