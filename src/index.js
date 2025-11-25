import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import './chp12/ex1/KettleOnly.css'
import ConfirmBoilBerdict from "./chp12/ex1/ConfirmBoilBerdict";
import DistanceConverter from "./chp12/ex2/DistanceConverter";
import Calculator from "./chp12/ex2_1/Calculator";
import Specialization from "./chp12/ex3/Specialization";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Specialization />
    </React.StrictMode>
);

// setInterval(()=>{
//     root.render(
//         <React.StrictMode>
//             <Clock />
//         </React.StrictMode>
//     );
// }, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();