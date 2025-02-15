export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type InputFormProps = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};
