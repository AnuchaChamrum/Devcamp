import { useEffect, useState } from "react"
import axios from "axios";
import TodoList from "./TodoList";

export default function Todo() {

    const [todos, setTodos] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setTodos(res.data);
            });
    }, []);

    return(
    <>
        <div className="titleList"><h2>TODOS LIST</h2></div>
        <div>{todos && <TodoList todos={todos}/> }</div>
    </>
    )
}