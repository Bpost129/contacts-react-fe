import { NavLink } from "react-router-dom"

import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav>
      <p><NavLink to="/">Contacts</NavLink></p>
      <p><NavLink to="/new">Add</NavLink></p>
    </nav>
  )
}

export default NavBar