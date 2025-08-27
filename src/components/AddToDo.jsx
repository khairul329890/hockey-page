import React, { useState } from "react";

const AddToDo = ({ setToDo, todo }) => {
    const [task, setTask] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();

        console.log("Task added:", task);

        if (task.trim() !== "") {
            setToDo([...todo, { task, isCompleted: false }]);
            setTask("");
        }
    };

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddToDo;