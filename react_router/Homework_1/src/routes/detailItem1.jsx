import { useParams } from "react-router-dom"


export default function DetailItem1() {
    const { itemId } = useParams();

    console.log(itemId);
    return (
        <>
            <div> ToDoItem #{itemId}</div>
            <p>Lorem ipsum dolor sit, 
               amet consectetur adipisicing elit.
               Nisi commodi blanditiis ipsam nesciunt quae, 
               repellat earum dolores. Quod, sit ipsam ex aperiam qui aliquid consequuntur amet delectus necessitatibus, 
               debitis esse.</p>
        </>
    )

} 