import React from "react";

const Todo = ({ task, isDone }) => {
    return (
        <li>
            {task} - {isDone ? "finished" : "Not finished"}
        </li>
    );
};

export default Todo;