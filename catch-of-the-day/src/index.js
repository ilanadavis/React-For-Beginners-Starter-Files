import React from 'react';  //importing the entire react library
import {  render } from 'react-dom'; //importing a specific method
import StorePicker from './components/StorePicker';
import './css/style.css';

render(<StorePicker />, document.querySelector('#main'));