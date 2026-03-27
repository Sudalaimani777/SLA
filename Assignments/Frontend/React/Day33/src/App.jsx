
import { useState } from 'react'
import './App.css'

function App() {
  const initialForm = {
    name: '',
    email: '',
    message: '',
  }

  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialForm)
  }

  const handleReset = () => {
    setFormData(initialForm)
    setSubmitted(false)
  }

  return (
    <main className="contact-page">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact Form</h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Write your message"
          required
        />

        <div className="button-row">
          <button type="submit">Submit</button>
          <button type="button" className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>

        {submitted && (
          <p className="success" role="status" aria-live="polite">
            Form submitted successfully
          </p>
        )}
      </form>
    </main>
  )
}

export default App
