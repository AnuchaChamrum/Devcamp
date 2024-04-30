import { useParams } from "react-router-dom";
// 
export default function ToDoItem() {
    const { toDoId } = useParams();

    return (
        <>
            <div id="toDoId">
                Item #{toDoId}
            </div>
            <div id="toDoItem">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis illo eaque nobis
                quibusdam minima corporis labore totam fugit quam cum
                aliquam inventore ipsa culpa magnam, odio, hic ullam distinctio quod!
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis illo eaque nobis
                quibusdam minima corporis labore totam fugit quam cum
                aliquam inventore ipsa culpa magnam, odio, hic ullam distinctio quod!
            </div>
        </>
    );
}