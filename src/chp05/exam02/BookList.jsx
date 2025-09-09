import React from "react";
import './Book.css'
import Book from './Book.jsx';

const books = [
    {
        title: "The Art of React",
        author: "윤재원",
        coverImage : "https://image.yes24.com/goods/151041836/XL"
    },
    {   title: "Learning Javascript by myself",
        author: "황기태",
        coverImage : "https://image.yes24.com/goods/107005339/XL"},


    {   title: "clean code",
        author: "로버트 C. 마틴",
        coverImage : "https://image.yes24.com/goods/11681152/XL"},
];

function BookList() {
    return (
        <div className={"bookListWrapper"}>

            {books.map((book) =>{
            return(
                <Book
                title = {book.title}
                author = {book.author}
                coverImage={book.coverImage}

                />
            )
        })
            }
        </div>
    );
}

export default  BookList;