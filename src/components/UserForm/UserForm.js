import { useEffect, useState } from 'react'

const UserForm = ({ onUserFormSubmit, initialData }) => {
  const [username, setUsername] = useState('')

  const usernameHandler =  e => setUsername(e.target.value);

  useEffect(() => {
    if(initialData) {
      setUsername(initialData.username)
    }
  }, [initialData])

  const formSubmitHandler = e => {
    e.preventDefault();

    const userObj = {
      username
    }

    onUserFormSubmit(userObj)
  }

  return (
    <form onSubmit={formSubmitHandler} noValidate>
      <div className="form-control">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={usernameHandler}/>
      </div>
{/* 
      <div className="form-control">
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="5" cols="50" value={description} onChange={descriptionHandler}/>
      </div> */}

      <button type='submit'>
        {initialData ? 'Edit User' : 'Add New User'}
      </button>
    </form>
)
}

export default UserForm