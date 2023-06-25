import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

import Container from '../../components/Container/Container'
import { SERVER_URL } from '../../config'
import UserForm from '../../components/UserForm/UserForm'

const CreateUserPage = () => {
  const navigator = useNavigate();

  const [formErrorMessage, setFormErrorMessage] = useState('')

  const createArtistHandler = (newArtistData) => {

    axios.post(`${SERVER_URL}/users`, newArtistData)
      .then(res => navigator(`/users/${res.data.id}`))
      .catch(err => setFormErrorMessage(err.message))

  }

  return (
    <Container>
      <h2>Add New User</h2>
      <UserForm onUserFormSubmit={createArtistHandler}/>

      {formErrorMessage && <p>{formErrorMessage}</p>}
    </Container>  
  )
}

export default CreateUserPage