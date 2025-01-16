import ContactCard from "../../components/ContactCard/ContactCard"

import style from './ContactList.module.css'

const ContactList = ({ contacts }) => {
  return (
    <>
      <h1>Contacts</h1>
      <div className={style.contactList}>
        {contacts.map(c => 
          <ContactCard key={c.id} contact={c} />
        )}
      </div>
    </>
  )
}

export default ContactList