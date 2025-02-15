export type Task = {
  id: number;
  text: string;
};

export type InputFormProps = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};
