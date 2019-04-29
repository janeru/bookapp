import React, { Component } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import BooksSection from '../books-section/books-section'
import axios from 'axios'
import Loader from '../loader'
class BookSectionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [1, 2],
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.props.categoryName).then((res) => {
            console.log(res)
            this.setState({
                books: res.data.items,
                isLoading: false
            })
        })
    }
    // 每次切換頁籤要更改請求內容 
    componentDidUpdate(previousProps) {

        if (previousProps.categoryName !== this.props.categoryName) {
            console.log("category has changed")
            this.callDataCategory()
        }
    }

    callDataCategory = () => {
        this.setState({
            isLoading: true
        })
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.props.categoryName).then((res) => {
            console.log(res)
            this.setState({
                books: res.data.items,
                isLoading: false
            })
        })
    }
    render() {


        return (
            <div className="has-fixed-footer">
                <Header />
                {this.state.isLoading ? <Loader /> : <BooksSection title={this.props.categoryName} books={this.state.books} />}

                <Footer />
            </div>
        )
    }
}


export default BookSectionPage