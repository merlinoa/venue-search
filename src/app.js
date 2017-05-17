import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'
import Venues from './components/Venues'
import store from './stores'
import { Provider } from 'react-redux'

const app = (
  <Provider store={store.initialize()}>
    <div>
      <Nav />
      <Venues />
    </div>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
