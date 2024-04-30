import { Link, Outlet } from "react-router-dom";
import "../root.css"


export default function Root() {
    let root = [
        {
            rootLink: "/about",
            page: "About",
        },
        {
            rootLink: "/job",
            page: "Job",
        },
        {
            rootLink: "/portfoilo",
            page: "Portfoilo",
        },
        {
            rootLink: "/skill",
            page: "Skill",
        },
        {
            rootLink: "/todos",
            page: "ToDos",
        },
    ]
    return (
        <>
            <div className="root">
                <nav>
                    <ul>
                        {
                            root.map((todo,index) => 
                            <li key={index}>
                                <Link to={todo.rootLink}>{todo.page}</Link>
                            </li>)
                        }
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}