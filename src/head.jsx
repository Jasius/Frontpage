// jshint esversion: 6
import React from 'react'
import { Helmet } from 'react-helmet'
import backgroundImage from './images/forest-min.jpeg'

var themeTitle = 'Dark'
var chromeTabColor = '#222'
const themeStorage = window.localStorage
function populateStorage () {
  const themes = [
    'main',
    'light',
    'modern'
  ]
  themeStorage.setItem('Theme', themes)
}
function setStyles () {
  themeStorage.getItem('Theme')
  if (themeStorage.Theme === 'light') {
    themeTitle = 'Light'
    chromeTabColor = '#eee'
  }
  function modern () {
    document.body.style.backgroundImage = `url(${backgroundImage})`
  }
  if (themeStorage.Theme === 'modern') {
    themeTitle = 'Modern'
    modern()
  }
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
          <meta name="theme-color" content={chromeTabColor} />
          <title>Frontpage {themeTitle}</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link rel="stylesheet" href={'../build/css/' + themeStorage.Theme + '.css'} />
        </Helmet>
        <button onClick={darktest}>dark</button>
        <button onClick={lighttest}>light</button>
      </div>
    )
  }
}
export default Head
