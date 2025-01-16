// import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ContactList from './pages/ContactList/ContactList'
import NewContact from './pages/NewContact/NewContact'
import ContactPage from './pages/ContactPage/ContactPage'

import './App.css'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/contacts' element={<ContactList />} />
        <Route path='/new' element={<NewContact />} />
        <Route path='/contacts/:contactId' element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
