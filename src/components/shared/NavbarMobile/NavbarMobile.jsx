import React from 'react'
import './NavbarMobile.scss'
import Home from '../../../assets/img/home.svg'
import Bookmark from '../../../assets/img/Bookmark.svg'
import Save from '../../../assets/img/Save.svg'
import Profile from '../../../assets/img/Profile.svg'

function NavbarMobile() {
  return (
    <section className="navbarmobilesection">
      <ul>
        <li>
          <img src={Home} alt="Home Icon" />
        </li>
        <li>
          <img src={Bookmark} alt="Bookmark Icon" />
        </li>
        <li>
          <img src={Save} alt="save Icon" />
        </li>
        <li>
          <img src={Profile} alt="Profile Icon" />
        </li>
      </ul>
    </section>
  )
}

export default NavbarMobile
