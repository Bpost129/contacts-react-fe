import { useState } from "react"
import { useNavigate } from "react-router-dom"

import style from './NewContact.module.css'

const EditContact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    const data = {...formData}
    const url = 'http://127.0.0.1:5000/create_contact'
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const res = await fetch(url, options)
    if (res.status !== 201 && res.status !== 200) {
      const data = await res.json()
      alert(data.message)
    } else {
      navigate("/")
    }
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  
  return (
    <div className={style.addContactContainer}>
      <h1>Edit Contact</h1>
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

export default EditContact