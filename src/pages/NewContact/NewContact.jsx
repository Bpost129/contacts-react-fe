import { useState } from "react"

import style from './NewContact.module.css'

const NewContact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const data = {...formData}?


  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  
  return (
    <div className={style.addContactContainer}>
      <h1>Add Contact</h1>
      <form className={style.addContactForm} onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name:
        <input 
          type="text"
          name="firstName" 
          id="first-name-input"
          value={formData.firstName}
          onChange={handleChange}  
        />
        </label>
        <label htmlFor="last-name">Last Name:
        <input 
          type="text"
          name="lastName"
          id="last-name"
          value={formData.lastName}
          onChange={handleChange}  
        />
        </label>
        <label htmlFor="email">Email:
        <input 
          type="text"
          name="email" 
          id="email"
          value={formData.email}
          onChange={handleChange}  
        />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewContact