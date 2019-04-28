import React from 'react'
import Book from './book'
let BooksContainer = (props) => {
    let books = [1, 2, 3, 4, 5]
    return (

        <div className="books-container">
            {books.map((book, i) => {
                return <Book key={i} />
            })
            }



        </div>
    )
}
export default BooksContainer