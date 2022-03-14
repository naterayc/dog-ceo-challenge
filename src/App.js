import React from 'react';
import './assets/css/styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AllBreedsContextProvider from './contexts/AllBreedsContext';
import Filters from './components/Filters';
import NotFound from './components/common/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
        <AllBreedsContextProvider>
          <Filters />
        </AllBreedsContextProvider>
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
