type InputFormProps = {
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
};

export function TodoList({ taskList, setTaskList }: InputFormProps) {
  return (
    <div className="todo-list">
      <table>
        <tbody>
          {taskList.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td>
                <div className="icons">
                  <button className="check-button">
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
