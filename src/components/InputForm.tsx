import React, { useState } from "react";

type InputFormProps = {
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
};

export function InputForm({ taskList, setTaskList }: InputFormProps) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTaskList([...taskList, inputText]);

    setInputText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <span className="material-icons add-icon">add_circle</span>
        </button>
      </form>
    </div>
  );
}
