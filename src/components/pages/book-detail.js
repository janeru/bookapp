import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
let BookDetail = (props) => {
    return (
        <div className="has-fixed-footer">
        <Header/>
        <section id="books-detail">
            <div className="container">
                <div className="book-container">
                    <div className="book-img">
                        <img src="https://via.placeholder.com/250x200" alt="" />
                    </div>
                    <div className="book-info">
                        <div className="book-title">
                            <h1>Book title</h1>
                        </div>
                        <div className="book-author">
                            <h3>Book author</h3>
                        </div>
                        <div className="book-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestiae voluptatem sed praesentium.
                              Repudiandae, ipsum voluptate, quidem dolorem non velit dignissimos odit doloribus porro ex deserunt,
                              cumque vero? Accusamus, autem.
            
            </p>
                        </div>


                    </div>
                    <div className="book-review-container">
                        <div className="book-stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="book-review">
                            <p>(11)</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <Footer/>
        </div>
    )
}
export default BookDetail