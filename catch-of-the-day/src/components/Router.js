import React from 'react';  //importing the entire react library
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker}/>
      <Route exact path="/store/:storeId" component={App}/>
      <Route component={NotFound} />


    </Switch>
  </BrowserRouter>
)


export default Router;