import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import BookSectionPage from './components/pages/book-section'
import BookDetailPage from './components/pages/book-detail'
import PageNotFound from './components/pages/page-not-found'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={BookSectionPage} />
          <Route path='/books/category/:categoryName' exact
            render={(props) => {
              { console.log(props.match.params.categoryName) }
              let categoryName = props.match.params.categoryName
              return <BookSectionPage categoryName={categoryName} />
            }}
          />
          <Route path='/books/:bookID' component={BookDetailPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
