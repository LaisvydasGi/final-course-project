import { useEffect, useState } from 'react'

const UserForm = ({ onUserFormSubmit, initialData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [date, setDate] = useState('')
  const [phone, setPhone] = useState('')

  const nameHandler =  e => setName(e.target.value);
  const emailHandler =  e => setEmail(e.target.value);
  const usernameHandler =  e => setUsername(e.target.value);
  const passwordHandler =  e => setPassword(e.target.value);
  const dateHandler =  e => setDate(e.target.value);
  const phoneHandler =  e => setPhone(e.target.value);

  useEffect(() => {
    if(initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
      setUsername(initialData.login.username)
      setPassword(initialData.login.password)
      setDate(initialData.registered.date)
      setPhone(initialData.phone)
    }
  }, [initialData])

  const formSubmitHandler = e => {
    e.preventDefault();

    const date = new Date();

    const fullDate = date.toISOString().slice(0,10);

    const userObj = {
      name,
      email,
      login: {
        username,
        password
      },
      registered: {
        date: fullDate
      },
      phone,
      picture: {
        large: "https://randomuser.me/api/portraits/women/31.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg"
      }
    }

    onUserFormSubmit(userObj)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={name} onChange={nameHandler} required/>
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" value={email} onChange={emailHandler} required/>
      </div>

      <div className="form-control">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={usernameHandler} required/>
      </div>

      <div className="form-control">
        <label htmlFor="pass">Password:</label>
        <input type="text" id="pass" name="pass" value={password} onChange={passwordHandler} minLength="8" required/>
      </div>

      <div className="form-control">
        <label htmlFor="phone">Phone No.:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={phoneHandler} required/>
      </div>

      <button type='submit'>
        {initialData ? 'Edit User' : 'Add New User'}
      </button>
    </form>
)
}

export default UserForm