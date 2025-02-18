import "material-icons/iconfont/material-icons.css";
import "./App.css";
import { useState } from "react";
import { Title } from "./components/Title";
import { InputForm } from "./components/InputForm";
import { TodoList } from "./components/TodoList";
import { Task } from "./types";
function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <div className="body">
      <header>
        <Title />
      </header>
      <main>
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
      </main>
    </div>
  );
}

export default App;
