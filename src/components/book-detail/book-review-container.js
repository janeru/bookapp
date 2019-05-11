import React, { Component } from 'react'
class BookReviewContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aveRating: []
        }
    }

    componentDidMount() {
        console.log(this.props.rating)
        if (this.props.rating.averageRating) {
            console.log('123')
            let newArray = []
            for (let i = 1; i <= this.props.rating.averageRating; i++) {
                newArray.push(i)
            }
            this.setState({
                aveRating: newArray
            })
        }
    }

    render() {
        const { aveRating } = this.state
        return (
            <div className="book-review-container">
                <div className="book-review">
                    {aveRating.length !== 0 ? "Average Rating:" + this.props.rating.averageRating :
                        ("Nobody review")}
                </div>
                <div className="book-stars">
                    {aveRating.length !== 0 ?
                        aveRating.map((rating, key) => {
                            return <i key={key} className="fas fa-star"></i>
                        }) : ('Nobody review')
                    }

                </div>

            </div>
        )
    }
}


export default BookReviewContainer