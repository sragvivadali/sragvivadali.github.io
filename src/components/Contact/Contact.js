import React, { useState } from 'react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Display a thank you message
    alert('Thank you for your submission!')

    // Clear the input fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='card'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            rows='4'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type='submit' className='btn btn--outline'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
