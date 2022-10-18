// import "bootstrap/dist/css/bootstrap-grid.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/home";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { CardChecklist } from "react-bootstrap-icons" ;
// import Container from "react-bootstrap/Container";

// function fetchTools(){
//     return [
//         {
//             id:1,
//             title:"吃饭",
//             completed:false,
//         },
//         {
//             id:2,
//             title:"喝水",
//             completed: false,
//         },
//         {
//             id:3,
//             title:"阅读",
//             completed: false,
//         },
//         {
//             id:4,
//             title:"吹逼",
//             completed: true,
//         },
//         {
//             id:5,
//             title: "上厕所",
//             completed: true,
//         },
//     ];
// }
//
// function App() {
//     const todos = fetchTools();
//     return (
//         <>
//             <ul>
//                 {todos.map((todo) => (
//                     <li>
//                         <input type='checkbox' defaultChecked={todo.completed} />
//                         <label>{todo.title}</label>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
//
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home  />
  </React.StrictMode>
);

