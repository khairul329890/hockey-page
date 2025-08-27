

import React, { useState } from "react";
import Todo from "./components/Todo";
import AddToDo from "./components/AddToDo"; // ফাইলের নাম বড় হাতের অক্ষরে ঠিক রাখা ভালো

function App() {
  const [tasks, setTasks] = useState([
    { task: "React Learn", isCompleted: true },
    { task: "Learn HTML", isCompleted: true },
    { task: "Learn CSS", isCompleted: true },
    { task: "Learn Node.js", isCompleted: true },
    { task: "Learn Express", isCompleted: false },
    { task: "Learn MongoDB", isCompleted: false }
  ]);

  return (
    <div>
      <h2>Add To Do</h2>
      {/* এখানে tasks আর setTasks পাঠাতে হবে */}
      <AddToDo todo={tasks} setToDo={setTasks} />

      <h1>My Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <Todo key={index} task={task.task} isDone={task.isCompleted} />
        ))}
      </ul>
    </div>
  );
}

export default App;