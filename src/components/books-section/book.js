import React from 'react'

let Book = (props) => {
    return (
        <div className="book">
            {/* <!-- 相片 --> */}
            <div className="book-img">
                <img src="https://via.placeholder.com/250x200" alt="" />
            </div>
            <div className="book-info">
                {/* <!-- title --> */}
                <div className="book-title">
                    <h3>Book title</h3>
                </div>
                {/* <!-- author --> */}
                <div className="book-author">
                    <p>By <em>Author</em></p>
                </div>
                <div className="book-call-to-action">
                    <button className="btn btn-highlight">Detail</button>
                </div>
            </div>
        </div>
    )
}

export default Book