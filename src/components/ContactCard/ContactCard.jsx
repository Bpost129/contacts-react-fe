import style from './ContactCard.module.css'

const ContactCard = ({ contact }) => {
  return (
    <div className={style.contactCard}>
      <h3>First: {contact.firstName}</h3>
      <h3>Last: {contact.lastName}</h3>
      <h3>Email: {contact.email}</h3>
    </div>
  )
}

export default ContactCard