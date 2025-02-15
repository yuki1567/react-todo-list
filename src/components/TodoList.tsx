import { InputFormProps } from "../types";

export function TodoList({ taskList, setTaskList }: InputFormProps) {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleCompleted = (id: number) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todo-list">
      <table>
        <tbody>
          {taskList.map((task, index) => (
            <tr className={`${task.completed ? "completed" : ""}`} key={index}>
              <td>{task.text}</td>
              <td>
                <div className="icons">
                  <button
                    className="check-button"
                    onClick={() => {
                      handleCompleted(task.id);
                    }}
                  >
                    <span className="material-icons check-icon">check</span>
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(task.id)}
                  >
                    <span className="material-icons delete-icon">delete</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
