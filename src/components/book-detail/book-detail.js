import React from 'react'
import BookContainer from './book-container';
let BookDetail = (props) => {
    return (<section id="books-detail">
        <div className="container">
            <BookContainer book={props.book} />

        </div>
    </section>
    )
}
export default BookDetail