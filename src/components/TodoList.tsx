import React, { useState } from "react";
import { InputFormProps } from "../types";

export function TodoList({ taskList, setTaskList }: InputFormProps) {
  const [inputText, setInputText] = useState("");

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

  const handleEdit = (id: number) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            editing: true,
          };
        }
        return task;
      })
    );

    const text = taskList.find((task) => task.id === id);

    setInputText(text?.text ?? "");
  };

  const handleSave = (id: number) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            text: inputText,
            editing: false,
          };
        }
        return task;
      })
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <ul className="todo-list">
      {taskList.map((task, index) => (
        <li
          className={`${task.completed ? "completed" : ""} todo-item`}
          key={index}
        >
          {task.editing ? (
            <input
              type="text"
              className="edit-input"
              onChange={handleChange}
              value={inputText}
            />
          ) : (
            <span className="todo-text">{task.text}</span>
          )}
          <div className="todo-actions">
            <a className="check-link" onClick={() => handleCompleted(task.id)}>
              check
            </a>
            <span className="separator">|</span>
            {task.editing ? (
              <a className="edit-link" onClick={() => handleSave(task.id)}>
                save
              </a>
            ) : (
              <a className="edit-link" onClick={() => handleEdit(task.id)}>
                edit
              </a>
            )}
            <span className="separator">|</span>
            <a
              href="#"
              className="delete-link"
              onClick={() => handleDelete(task.id)}
            >
              delete
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
