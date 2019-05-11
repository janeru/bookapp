import React from 'react'
import BookInfo from './book-info'
import BookReviewContainer from './book-review-container';
let BookContainer = (props) => {
    console.log(props)
    let author = props.book.items[0].volumeInfo.authors ?
        props.book.items[0].volumeInfo.authors : ('No Author')

    let image = props.book.items[0].volumeInfo.imageLinks ?
        props.book.items[0].volumeInfo.thumbnail : ("https://images.unsplash.com/photo-1556017928-5e556f6a8b79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")

    let description = props.book.items[0].volumeInfo.description ?
        props.book.items[0].volumeInfo.description : ('No description')
    let bookInfo = {
        image: image,
        title: props.book.items[0].volumeInfo.title,
        author: author,
        description: description,
        rating: {
            averageRating: props.book.items[0].volumeInfo.averageRating,
            ratingsCount: props.book.items[0].volumeInfo.ratingsCount
        }
    }
    return (
        <div className="book-container">
            <div className="book-img">
                <img src={bookInfo.image} alt="" />
            </div>
            <BookInfo title={bookInfo.title}
                author={bookInfo.author}
                description={bookInfo.description}

            />
            <BookReviewContainer rating={bookInfo.rating} />
        </div>
    )
}

export default BookContainer