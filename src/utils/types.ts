export type AddTaskProps = {
  addTask: (title: string) => void;
};

export type EditableSpanPropsType = {
  title: string;
  onChange: (newValue: string) => void;
};

export type TaskPropsType = {
  removeTask: (id: string) => void;
  changeTaskStatus: (taskId: string, completed: boolean) => void;
  changeTaskTitle: (taskId: string, newTitle: string) => void;
  t: TaskType;
};

export type TaskDetailsProps = {
  changeTaskTitle: (taskId: string, newTitle: string) => void;
  changeTaskStatus: (taskId: string, completed: boolean) => void;
};

export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
};

export type PropsType = {
  title: string;
  tasks: TaskType[];
  filter: FilterValuesType;
  removeTask: (id: string) => void;
  changeTaskStatus: (taskId: string, completed: boolean) => void;
  changeTaskTitle: (taskId: string, newTitle: string) => void;
  changeFilter: (value: FilterValuesType) => void;
};

export type FilterValuesType = "all" | "completed" | "active";

export type TasksState = {
  tasks: TaskType[];
  loading: boolean;
  error: string | null;
  filter: FilterValuesType;
};