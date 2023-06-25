import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import Container from '../../components/Container/Container'
import { SERVER_URL } from '../../config'
import { BeatLoader } from "react-spinners"
import UserForm from '../../components/UserForm/UserForm'

const EditUserPage = () => {
  const { id } = useParams()
  const navigator = useNavigate();

  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')



  useEffect(() => {

    axios.get(`${SERVER_URL}/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => setErrorMessage(err.message))

  }, [id])



  if (!user && !errorMessage) {
    return <Container><BeatLoader color="#000000" /></Container>
  }


  const editUserHandler = (data) => {

    axios.put(`${SERVER_URL}/users/${id}`, data)
      .then(res => navigator(`/users/${id}`))
      .catch(err => setErrorMessage(err.message))
  
  }


  return (
    <Container>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ): (
        <UserForm initialData={user} onUserFormSubmit={editUserHandler}/>
      )}
    </Container>
  )

}

export default EditUserPage