import React from 'react'
let BookInfo = (props) => {
    return (
        <div className="book-info">
            <div className="book-title">
                <h1>{props.title}</h1>
            </div>
            <div className="book-author">
                <h3>{"By" + props.author}</h3>
            </div>
            <div className="book-description">
                <p>{props.description}</p>
            </div>


        </div>
    )
}

export default BookInfo