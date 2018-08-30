import React from 'react';  //importing the entire react library
import {  render } from 'react-dom'; //importing a specific method
import Router from './components/Router';
import './css/style.css';

render(<Router />, document.querySelector('#main'));