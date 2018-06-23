import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Root from './Root'
import configureStore from 'store'

import './main.scss'
console.log('window.PRELOADED_STATE', window.PRELOADED_STATE)
const { store } = configureStore(window.PRELOADED_STATE)
const root = (
  <Root
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(root, document.getElementById('root'))