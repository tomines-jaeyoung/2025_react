import React from "react";
import './Book.css';


function Book(props) {
    return (
        <div>
            <div className="wrapper">
                <img src={props.coverImage} />
            </div>
            <div className="content-container">
                <span className="titleText">{props.title}</span>
                <span className="authorText">{props.author}</span>
            </div>
        </div>
    );
}

export default Book;
