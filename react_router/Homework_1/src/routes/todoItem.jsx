import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function ToDoItem({number, toDos}) {
    //
    const {toDoItemId} = useParams();
    console.log(toDoItemId);
    console.log(typeof toDoItemId);
    return (
        <div>Hello {toDoItemId}</div>
    )
}