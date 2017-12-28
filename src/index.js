// eslint esversion: 6
import React from 'react'
import { render } from 'react-dom'
import Search from './search'
import Bookmarklet from './bookmarklet'
import Head from './head'
// import './scss/app.css'

const App = () => (
  <div class={window.localStorage.Theme + ' ' + 'body'}>
    <Head/>
    <Search />
    <Bookmarklet />
  </div>
)

render(<App />, document.getElementById('root'))
