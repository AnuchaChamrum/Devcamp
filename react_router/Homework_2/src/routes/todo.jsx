import { Link, Outlet } from "react-router-dom"
export default function ToDo() {
    return (
        <>
            <div className="container-todos">
                <div className="container-todo">
                    <div id="toDo">
                        <h2>ToDo</h2>
                    </div>
                    <ul className="linkItem">
                        <li id="link-todos">
                            <Link to="/todos/1">ToDoItem 1</Link>
                        </li>
                        <li id="link-todos">
                            <Link to="/todos/2">ToDoItem 2</Link>
                        </li>
                        <li id="link-todos">
                            <Link to="/todos/3">ToDoItem 3</Link>
                        </li>
                        <li id="link-todos">
                            <Link to="/todos/4">ToDoItem 4</Link>
                        </li>
                        <li id="link-todos">
                            <Link to="/todos/5">ToDoItem 5</Link>
                        </li>
                        <li id="link-todos">
                            <Link to="/todos/6">ToDoItem 6</Link>
                        </li>
                        <li id="link-todos">
                            <Link to="/todos/7">ToDoItem 7</Link>
                        </li>
                        <li id="link-todos">
                            <Link to="/todos/8">ToDoItem 8</Link>
                        </li>
                        <li id="link-todos">
                            <Link to="/todos/9">ToDoItem 9</Link>
                        </li>
                        <li id="link-todos">
                            <Link to="/todos/10">ToDoItem 10</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>

        </>

    )
}