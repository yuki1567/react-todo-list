import React from "react";

export function TodoList() {
  return (
    <div className="todo-list">
      <table>
        <tbody>
          <tr>
            <td>プログラミング</td>
            <td>
              <div className="icons">
                <button className="check-button">
                  <span class="material-icons check-icon">check</span>
                </button>
                <button className="delete-button">
                  <span class="material-icons delete-icon">delete</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
