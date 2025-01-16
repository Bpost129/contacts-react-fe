import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ContactList from './pages/ContactList/ContactList'
import NewContact from './pages/NewContact/NewContact'

import './App.css'

function App() {
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
      <NavBar />
      <Routes>
        <Route path='/' element={<ContactList contacts={contacts} />} />
        <Route path='/new' element={<NewContact />} />
      </Routes>
    </>
  )
}

export default App
