import React from 'react'
import BooksContainer from './books-container';
let BookSection = (props) => {
    console.log(props)
    if (props.books.length === 0) {
        return (
            <section id="books-section">
                <div className="container">
                    <div className="section-title">
                        <h1>{"No Books found for " + props.title}</h1>
                    </div>
                    <BooksContainer books={props.books} />
                </div>
            </section>
        )
    }
    return (
        <section id="books-section">
            <div className="container">
                {props.title === undefined || props.title === null ?
                    <div className="photoBg">
                        <div className="imgName">
                            <div className="animated rollIn	faster" style={{
                                'color': 'pink', 'fontSize': '30px'
                            }}>
                                Welcome to web's book world!
                        </div>
                            <img className="homePageImg animated zoomIn	slower"
                                src="https://images.unsplash.com/photo-1553714155-2ee64b8575e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" />
                        </div>

                    </div> :
                    <div>
                        <div className="section-title">
                            <h1>{props.title + " Books"}</h1>
                        </div>
                        <BooksContainer books={props.books} />
                    </div>

                }
            </div>
        </section>
    )
}

export default BookSection