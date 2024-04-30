import { Link, Outlet } from "react-router-dom";
import "../root.css"


export default function Root() {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/job">Job</Link>
                        </li>
                        <li>
                            <Link to="/portfoilo">Portfoilo</Link>
                        </li>
                        <li>
                            <Link to="/skill">Skill</Link>
                        </li>
                        <li>
                            <Link to="/todos">ToDo</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}