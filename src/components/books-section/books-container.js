import React from 'react'
import Book from './book'
let BooksContainer = (props) => {

    if (props.books.length === 0) {

    }
    return (

        <div className="books-container">
            {props.books.map((book, i) => {
                return <Book book={book} key={i} />
            })
            }



        </div>
    )
}
export default BooksContainer