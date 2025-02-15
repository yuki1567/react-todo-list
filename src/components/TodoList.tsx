import { InputFormProps } from "../types";

export function TodoList({ taskList, setTaskList }: InputFormProps) {
  const handleDelete = () => {};

  return (
    <div className="todo-list">
      <table>
        <tbody>
          {taskList.map((task, index) => (
            <tr key={index}>
              <td>{task.text}</td>
              <td>
                <div className="icons">
                  <button className="check-button" onClick={handleDelete}>
                    <span className="material-icons check-icon">check</span>
                  </button>
                  <button className="delete-button">
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
