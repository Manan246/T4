// write a program to build a react app for to do list task
// 1. Add 1 input field and button, by clicking on button display entered text on the same page
// 2. add delete button with each added task to delete the task

import React, { useState } from "react"

var tasks = []
function P22() {
    const [Task, setTask] = useState("");
    const [Todolist, setTodoList] = useState([]);
    function handleChange(event) {
        setTask(event.target.value);
    }
    // To add task
    function addTask(event) {
        setTodoList([...Todolist, Task]);
    };
    //To add delete functionality
    function deleteTask(taskName) {
        setTodoList(
            Todolist.filter((task) => {
                if (task !== taskName) {
                    return true;
                } else {
                    return false;
                }
            })
        )
    }
    return (
        <div>
            <h1> Enter Task </h1>

            <input onChange={handleChange} />
            <button onClick={addTask}> Add Task </button>
            {Todolist.map((task) => {
                return (
                    <div>
                        <h1> {task}</h1>
                        <button onClick={() => deleteTask(task)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default P22