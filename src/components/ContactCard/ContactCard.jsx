// import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import style from './ContactCard.module.css'

const ContactCard = ({ contact }) => {


  return (
    <NavLink className={style.contactCard} to={`/contacts/${contact.id}`}>
      <h3>First: {contact.firstName}</h3>
      <h3>Last: {contact.lastName}</h3>
      <h3>Email: {contact.email}</h3>
    </NavLink>
  )
}

export default ContactCard