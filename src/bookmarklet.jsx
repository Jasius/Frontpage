// jshint esversion: 6
import React from 'react'

const items = [
  { id: '1', name: '/r/PUBattlegrounds', link: 'https://www.reddit.com/r/PUBATTLEGROUNDS/' },
  { id: '2', name: '/r/GlobalOffensive', link: 'https://www.reddit.com/r/GlobalOffensive/' },
  { id: '3', name: '/r/Rainbow6', link: 'https://www.reddit.com/r/Rainbow6/' },
  { id: '4', name: '/r/WebDev', link: 'https://www.reddit.com/r/webdev/' },
  { id: '5', name: '/r/WebDesign', link: 'https://www.reddit.com/r/web_design/' }
]

const list = (
  items.map(bookmark => (
    <li key={bookmark.id}>
      <a href={bookmark.link}>{bookmark.name}</a>
    </li>
  ))
)

const items2 = [
  { id: '1', name: '/r/Windows10', link: 'https://www.reddit.com/r/Windows10/' },
  { id: '2', name: '/r/Windows', link: 'https://www.reddit.com/r/Windows/' },
  { id: '3', name: '/r/ClearShift', link: 'https://www.reddit.com/r/ClearShift/' },
  { id: '4', name: 'Microsoft Community stats', link: 'https://www.carbonitex.net/Discord/server?s=150662382874525696' },
  { id: '5', name: 'Community Dashboard', link: 'https://mee6.xyz/dashboard/150662382874525696' }
]

const list2 = (
  items2.map(bookmark => (
    <li key={bookmark.id}>
      <a href={bookmark.link}>{bookmark.name}</a>
    </li>
  ))
)

const items3 = [
  { id: '1', name: 'Twitter', link: 'https://twitter.com/' },
  { id: '2', name: 'Linkedin', link: 'https://www.linkedin.com' },
  { id: '3', name: 'Codepen', link: 'http://codepen.io/' },
  { id: '4', name: 'StackOverflow', link: 'http://stackoverflow.com/' },
  { id: '5', name: 'Facebook', link: 'https://www.facebook.com' }
]

const list3 = (
  items3.map(bookmark => (
    <li key={bookmark.id}>
      <a href={bookmark.link}>{bookmark.name}</a>
    </li>
  ))
)
const items4 = [
  { id: '1', name: 'Youtube', link: 'https://www.youtube.com/feed/subscriptions' },
  { id: '2', name: 'Mixer', link: 'https://mixer.com/' },
  { id: '3', name: 'Twitch', link: 'http://www.twitch.tv/' },
  { id: '4', name: 'Steam', link: 'http://store.steampowered.com/' },
  { id: '5', name: 'Spotify', link: 'https://play.spotify.com/collection' }
]

const list4 = (
  items4.map(bookmark => (
    <li key={bookmark.id}>
      <a href={bookmark.link}>{bookmark.name}</a>
    </li>
  ))
)
const items5 = [
  { id: '1', name: 'Portfolio', link: 'https://jaska.co/' },
  { id: '2', name: 'ClearShift', link: 'https://ClearShift.jaska.co/' },
  { id: '3', name: 'GitHub profile', link: 'https://github.com/Jasius' },
  { id: '4', name: 'Repositories', link: 'https://github.com/Jasius?tab=repositories' },
  { id: '5', name: 'Cloudflare', link: 'https://www.cloudflare.com/' }
]

const list5 = (
  items5.map(bookmark => (
    <li key={bookmark.id}>
      <a href={bookmark.link}>{bookmark.name}</a>
    </li>
  ))
)
const items6 = [
  { id: '1', name: 'Microsoft Community', link: 'https://github.com/Jasius/Windows-theme/projects/3' },
  { id: '2', name: 'Frontpage', link: 'https://github.com/Jasius/Frontpage/projects/1' },
  { id: '3', name: 'Portfolio', link: 'https://github.com/Jasius/Portfolio/projects/2' },
  { id: '4', name: 'ClearShift', link: 'https://github.com/Jasius/ClearShift/projects/1' },
  { id: '5', name: 'Invisibars', link: 'https://chrome.google.com/webstore/developer/stats/ekpmfomajcjeadhhcnpjabkfncbgligp' }
]

const list6 = (
  items6.map(bookmark => (
    <li key={bookmark.id}>
      <a href={bookmark.link}>{bookmark.name}</a>
    </li>
  ))
)
const items7 = [
  { id: '1', name: 'Adobe.CC', link: 'https://color.adobe.com/explore/most-popular/?time=all' },
  { id: '2', name: 'Icons8', link: 'https://icons8.com/' },
  { id: '3', name: 'Accesibility checker', link: 'http://achecker.ca/checker/index.php' },
  { id: '4', name: 'Pixlr', link: 'https://pixlr.com/editor/' },
  { id: '5', name: 'Corporate Ipsum', link: 'http://www.cipsum.com/' }
]

const list7 = (
  items7.map(bookmark => (
    <li key={bookmark.id}>
      <a href={bookmark.link}>{bookmark.name}</a>
    </li>
  ))
)
const items8 = [
  { id: '1', link: 'http://litrail.lt', name: 'Litrail' },
  { id: '2', link: 'https://trafi.lt', name: 'Trafi' },
  { id: '3', link: 'https://google.lt/maps', name: 'Google maps' },
  { id: '4', link: 'http://mano.vilniustransport.lt/', name: 'VilniusTransport' },
  { id: '5', link: 'https://autobusubilietai.lt/', name: 'Autobusai' }
]

const list8 = (
  items8.map(bookmark => (
    <li key={bookmark.id}>
      <a href={bookmark.link}>{bookmark.name}</a>
    </li>
  ))
)

class Bookmarks extends React.Component {
  render () {
    return [
      <div className="section">
        <div className="list reddit">
          <ul>
            <h1>Reddit</h1>
            {list}
          </ul>
        </div>
        <div className="list redditmod">
          <ul>
            <h1>Reddit moderation</h1>
            {list2}
          </ul>
        </div>
        <div className="list admin">
          <ul>
            <h1>Dev stuff</h1>
            {list3}
          </ul>
        </div>
        <div className="list social">
          <ul>
            <h1>Social media</h1>
            {list4}
          </ul>
        </div>
        <div className="list fun">
          <ul>
            <h1>Entertainment</h1>
            {list5}
          </ul>
        </div>
        <div className="list">
          <ul>
            <h1>Projects</h1>
            {list6}
          </ul>
        </div>
        <div className="list orangyred">
          <ul>
            <h1>Web tools</h1>
            {list7}
          </ul>
        </div>
        <div className="list blueyish">
          <ul>
            <h1>Travel</h1>
            {list8}
          </ul>
        </div>
      </div>
    ]
  }
}

export default Bookmarks
