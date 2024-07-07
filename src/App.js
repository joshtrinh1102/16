import Profile from './profile.js'
import Header from './header.js'

function Gallery(){
  const info = Profile.map(Profile =>
    <li key={Profile.id}>
      {Profile.name},
      {Profile.role},
      <img src={Profile.photo}></img>
    </li>
  )
  const place = Header.map(Header =>
    <li key={Header.id}>
      {Header.id}
    </li>
  )
  return <ul>{info}{place}</ul>
}

export default Gallery;