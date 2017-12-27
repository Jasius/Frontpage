// jshint esversion: 6
import React from 'react'
import { Helmet } from 'react-helmet'

var themeTitle = 'Dark'
const themeStorage = window.localStorage
function setStyles () {
  themeStorage.getItem('Theme')
  if (themeStorage.Theme === 'light') {
    themeTitle = 'Light'
  }
  if (themeStorage.Theme === 'modern') {
    themeTitle = 'Modern'
  }
}
function populateStorage () {
  const themes = [
    'main',
    'light',
    'modern'
  ]
  themeStorage.setItem(themes)
}
if (!themeStorage.getItem('Theme')) {
  populateStorage()
} else {
  setStyles()
}

function darktest () {
  themeStorage.Theme = 'main'
  window.location.reload()
}
function lighttest () {
  themeStorage.Theme = 'light'
  window.location.reload()
}

class Head extends React.Component {
  render () {
    return (
      <div className="application">
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
          // add variable for meta content
          <meta name="theme-color" content="#222" />
          <link rel="stylesheet" href={'https://frontpage.jaska.co/dist/css/minified/' + themeStorage.getItem('Theme') + '.css'} />
          <title>Frontpage {themeTitle}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <button onClick={darktest}>dark</button>
        <button onClick={lighttest}>light</button>
      </div>
    )
  }
}
export default Head
