import React, { Component } from 'react';
import BookSectionPage from './components/pages/book-section'
import BookDetailPage from './components/pages/book-detail'
import PageNotFound from './components/pages/page-not-found'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import $ from 'jquery';

class App extends Component {
  componentDidMount() {
    window.buttonList = false
    window.onresize = this.reportWindowSize
  }

  reportWindowSize() {



    if (window.innerWidth >= 768) {

      document.querySelector('.categories').style.display = "flex"
      $(".categories").slideDown("slow")
      document.querySelector('.logo').style.display = "block"
      document.querySelector('.iconBar').style.display = "none"

    } else {
      document.querySelector('.categories').style.display = "none"

      $(".categories").slideUp("slow")
      document.querySelector('.logo').style.display = "none"
      document.querySelector('.iconBar').style.display = "block"


    }
  }
  render() {
    return (

      <div className="App">


        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={BookSectionPage} />

            <Route path='/books/category/:categoryName' exact
              render={(props) => {
                { console.log(props.match.params.categoryName) }
                let { categoryName } = props.match.params
                return <BookSectionPage categoryName={categoryName} />
              }}
            />
            <Route path='/book/:bookID'

              render={(props) => {

                let { bookID } = props.match.params
                return <BookDetailPage bookID={bookID} />
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
