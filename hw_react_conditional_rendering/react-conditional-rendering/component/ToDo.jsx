
import ToDoItem from "./ToDoItem"

export default function ToDo() {

    let toDo = [
        {toDoItem :"1",priority : 0},
        {toDoItem :"2",priority : 1},
        {toDoItem :"3",priority : 0},
        {toDoItem :"4",priority : 2},
        {toDoItem :"5",priority : 3},
        {toDoItem :"6",priority : 4},
        {toDoItem :"7",priority : 5},
        {toDoItem :"8",priority : 6},
        {toDoItem :"9",priority : 7},
        {toDoItem :"10",priority : 8},
    ]
    
    return (
    <>
    <div className="todo">ToDo</div> 
    <div>
       {
        toDo.map((i) =>(
            <ToDoItem priority= {i.priority} toDoItem={i.toDoItem} key={i.toDoItem}/>)
       )}
    </div>
    </>
    )
    
}