import React from 'react'
import { useState , useEffect} from 'react';
import './book.css'

const Book = (props)=>{
    const [book, setBook] = useState("images/redbook.png");

    return(<>
        <div className = 'book-cont'>
            <img className = "book-image" src={book}/>
            <div className = 'book-name'>{props.bookname}</div>
        </div>
    </>)
}

export default Book;