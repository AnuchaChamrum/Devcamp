// สร้าง ToDoItem component
// กำหนดให้ ToDoItem รับ prop เข้ามาชื่อ priority หากมีค่าเป็น 0 ให้แสดงพื้นหลังสีแดง
// แสดงผล ToDoItem ใน ToDo component
// สมมุติรายการ ToDoItem ใน ToDo component 10 รายการ และแสดงผล items
// ToDoItem  หมายเลข 1,3   priority = 0

function ToDoItem(props){
    if (props.priority) 
        return (
        <div className="todolist" style={{background: 'white'}}>{`ToDoItem ${props.toDoItem}`}</div>
        );
    else 
        return (
        <div className="todolist" style={{background: 'red'}}>{`ToDoItem ${props.toDoItem}`}</div>
        );
    console.log(props.priority);

}

export default ToDoItem;