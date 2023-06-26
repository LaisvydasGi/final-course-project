import { useEffect, useState } from 'react'

const UserForm = ({ onUserFormSubmit, initialData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [url, setUrl] = useState('https://via.placeholder.com/150/112233')

  const nameHandler =  e => setName(e.target.value);
  const emailHandler =  e => setEmail(e.target.value);
  const usernameHandler =  e => setUsername(e.target.value);
  const passwordHandler =  e => setPassword(e.target.value);
  const phoneHandler =  e => setPhone(e.target.value);
  const urlHandler =  e => setUrl(e.target.value);

  useEffect(() => {
    if(initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
      setUsername(initialData.login.username)
      setPassword(initialData.login.password)
      setPhone(initialData.phone)
      setUrl(initialData.picture.url)
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
        url
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
        <label htmlFor="phone">Phone no.:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={phoneHandler} required/>
      </div>

      <div className="form-control">
        <label htmlFor="photo">Photo URL:</label>
        <input type="url" id="photo" name="photo" value={url} onChange={urlHandler}/>
      </div>

      <button type='submit'>
        {initialData ? 'Edit User' : 'Add New User'}
      </button>
    </form>
)
}

export default UserForm