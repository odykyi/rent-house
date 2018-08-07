// import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Donut,
  Heading,
  Provider
} from 'rebass'
import RentalTypes from './rebass/RentalTypes';
import Cities from './rebass/Cities';


ReactDOM.render((
  <Provider>
    <Heading>Hello</Heading>
    <Donut
      value={3/4}
    />
    <RentalTypes/>
    <Cities/>
  </Provider>

), document.getElementById('root'));


if (module) {
  module.hot.accept()

}
