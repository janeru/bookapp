import React from 'react'
import { NavLink } from 'react-router-dom'
let Book = (props) => {
    console.log(props.book)
    let author = props.book.volumeInfo.authors ?
        props.book.volumeInfo.authors[0] : ('No Author')

    let image = props.book.volumeInfo.imageLinks ?
        props.book.volumeInfo.imageLinks.thumbnail : ("https://images.unsplash.com/photo-1556017928-5e556f6a8b79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
    let bookInfo = {
        image: image,
        title: props.book.volumeInfo.title,
        author: author,
        id: props.book.id
    }
    return (
        <div className="book">
            {/* <!-- 相片 --> */}
            <div className="book-img animated zoomIn	slower">
                <img src={bookInfo.image} alt="" />
            </div>
            <div className="book-info">
                {/* <!-- title --> */}
                <div className="book-title">
                    <h3>{bookInfo.title}</h3>
                </div>
                {/* <!-- author --> */}
                <div className="book-author">
                    <p>By <em>{bookInfo.author}</em></p>
                </div>
                <div className="book-call-to-action">
                    <NavLink to={"/book/" + bookInfo.id} className="btn btn-highlight">More Info...</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Book