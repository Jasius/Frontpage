// eslint esversion: 6
import React from 'react'
import { render } from 'react-dom'
import Search from './search'
import Bookmarklet from './bookmarklet'
import Head from './head'

setTimeout(function () {
  document.body.className = ''
}, 1000)

const App = () => (
  <div>
    <Head/>
    <Search />
    <Bookmarklet />
  </div>
)

render(<App />, document.getElementById('root'))
