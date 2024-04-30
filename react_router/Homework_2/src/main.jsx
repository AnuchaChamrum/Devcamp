import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import Job from './routes/job.jsx';
import Portfoilo from './routes/portfoilo.jsx';
import Skill from './routes/skill.jsx';
import ToDoItem from './routes/todoItem.jsx';
import ToDo from './routes/todo.jsx';
import About from './routes/about.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/job",
        element: <Job />,
      },
      {
        path: "/portfoilo",
        element: <Portfoilo />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/todos",
        element: <ToDo />,
        children:[
          {
            path: "/todos/:toDoId",
            element: <ToDoItem />,
          }

        ]
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
