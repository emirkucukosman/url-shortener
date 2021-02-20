import React from 'react'
import { createBrowserHistory } from 'history'
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Redirect from './views/Redirect'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <BrowserRouter history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/r/:shortURL" component={Redirect} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
