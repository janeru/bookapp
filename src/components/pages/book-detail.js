import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import BookDetail from '../book-detail/book-detail'
let BookDetailPage = (props) => {
    return (
        <div className="has-fixed-footer">
            <Header />
            <BookDetail />
            <Footer />
        </div>
    )
}
export default BookDetailPage