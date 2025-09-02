// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // App은 이제 사용하지 않으므로 주석 처리하거나 지워도 됩니다.
import reportWebVitals from './reportWebVitals';
import Library from './chp03/Library.jsx'; // 👈 1. Library.jsx 파일에서 Library 컴포넌트 가져오기
import './chp03/book.css';
import ConfirmDialogs from "./chp04/ConfirmDialogs";
import ConfirmDialog from "./chp04/ConfirmDialog";
import './chp04/Button.css'
import './chp04/ConfirmDialog.css'
import Clock from "./chp04/Clock";
import './chp04/Clock.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=>{
    root.render(
        <React.StrictMode>
            <Clock /> {/* 👈 2. App 대신 Library를 보여주도록 변경 */}
        </React.StrictMode>
    );

}, 1000)



reportWebVitals();