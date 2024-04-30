import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import ToDoItem from "./todoItem"

export default function ToDo() {
    const [toDos, setToDos] = useState([
        {
            linkToDos: "/todos/1",
            number: 1,
            detail: "ToDoItem #1",
        },
        {
            linkToDos: "/todos/2",
            number: 2,
            detail: "ToDoItem #2",
        },
        {
            linkToDos: "/todos/3",
            number: 3,
            detail: "ToDoItem #3",
        },
        {
            linkToDos: "/todos/4",
            number: 4,
            detail: "ToDoItem #4",
        },
        {
            linkToDos: "/todos/5",
            number: 5,
            detail: "ToDoItem #5",
        },
        {
            linkToDos: "/todos/6",
            number: 6,
            detail: "ToDoItem #6",
        },
        {
            linkToDos: "/todos/7",
            number: 7,
            detail: "ToDoItem #7",
        },
        {
            linkToDos: "/todos/8",
            number: 8,
            detail: "ToDoItem #8",
        },
        {
            linkToDos: "/todos/9",
            number: 9,
            detail: "ToDoItem #9",
        },
        {
            linkToDos: "/todos/10",
            number: 10,
            detail: "ToDoItem #10",
        },
    ])
    const renderToDos = (todo) => {
        return todo.map((todo, index) =>
            <li key={index}>
                <Link to={{ pathname: todo.linkToDos, state: toDos }}>
                    ToDoItem #{todo.number}
                </Link>
            </li>
        )
    }

    return (
        <>
            <div className="container-todos">
                <div className="container-todo">
                    <div id="toDo">
                        <h2>ToDo</h2>
                    </div>
                    <ul className="contain-todo-item">
                        {renderToDos(toDos)}
                    </ul>
                </div>
                <div>
                    {/* <ToDoItem toDos={ toDos }/> */}
                    <Outlet />
                </div>
            </div>
        </>
    );


}