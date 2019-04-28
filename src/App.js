import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import BookSectionPage from './components/pages/book-section'
import BookDetail from './components/pages/book-detail'
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
              return <BookSectionPage categoryName={props.match.params.categoryName} />
            }}
          />
          <Route path='/books/:bookID' component={BookDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
