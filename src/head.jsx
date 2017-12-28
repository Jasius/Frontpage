// jshint esversion: 6
import React from 'react'
import { Helmet } from 'react-helmet'
import backgroundImage from './images/forest-min.jpeg'

var themeTitle = 'Dark'
var stylesheet = 'https://cdn.rawgit.com/Jasius/8144aa61e74ca55b34e9da7ba41b0215/raw/37b982c4350891d2db9d0849df4957b84fd4d275/main.css'
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
    stylesheet = 'https://cdn.rawgit.com/Jasius/8144aa61e74ca55b34e9da7ba41b0215/raw/8a7644a428393402bfc87e596341390878691790/light.css'
  }
  function modern () {
    document.body.style.backgroundImage = `url(${backgroundImage})`
  }
  if (themeStorage.Theme === 'modern') {
    themeTitle = 'Modern'
    stylesheet = 'https://cdn.rawgit.com/Jasius/8144aa61e74ca55b34e9da7ba41b0215/raw/87c1984dfbe3be849b1eabc6a97ad181766a1d0b/modern.css'
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
          <meta name="theme-color" content={chromeTabColor} />
          <title>Frontpage {themeTitle}</title>
          <link rel="stylesheet" href={stylesheet} />
        </Helmet>
        <button onClick={darktest}>dark</button>
        <button onClick={lighttest}>light</button>
      </div>
    )
  }
}
export default Head
