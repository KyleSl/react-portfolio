import React from 'react'

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const handleMessage = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setFormStatus('Submitted')
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    }
    const message = {
      name: target.name.value,
      email: target.email.value,
      text: target.message.value
    }
    console.log(message);
  }
  return (
    <div className="container mt-5">
      <h2 className="text-white mb-3">Message Me</h2>
      <form onSubmit={handleMessage}>
        <div className="mb-3">
          <label className="text-white form-label" htmlFor="name">
            Name
          </label>
          <input className="text-white form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="text-white form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="text-white form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact;