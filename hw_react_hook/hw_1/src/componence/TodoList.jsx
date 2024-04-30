import "./todoList.css"

export default function TodoList({ todos }) {
    return (
        <div>
            <ul className="listContainer">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox"/>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}