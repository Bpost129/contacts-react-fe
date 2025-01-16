import { useState, useEffect } from "react"

import ContactCard from "../../components/ContactCard/ContactCard"

import style from './ContactList.module.css'

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  const fetchContacts = async () => {
    const res = await fetch("http://127.0.0.1:5000/contacts")
    const data = await res.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }

  useEffect(() => {
    fetchContacts()
  }, [])
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