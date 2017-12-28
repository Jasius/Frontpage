import React from 'react'
import searchImage from './images/ggl.png'

class Search extends React.Component {
  render () {
    return (
      <div className="container">
        <a href="http://google.com">
          <img className="google" alt="Google logo" src={searchImage}></img>
        </a>
        <form action="http://www.google.com/search">
          <input className="textbox" name="q" placeholder="Google search" onenter="send()" autoComplete="on" maxlength="60"></input>
        </form>
      </div>
    )
  }
}
export default Search
