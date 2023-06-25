import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import Container from '../../components/Container/Container'
import { SERVER_URL } from '../../config'
import { BeatLoader } from "react-spinners"
import ArtistForm from '../../components/ArtistForm/ArtistForm'

const EditArtistPage = () => {
  const { id } = useParams()
  const navigator = useNavigate();

  const [artist, setArtist] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')



  useEffect(() => {

    axios.get(`${SERVER_URL}/artists/${id}`)
      .then(res => setArtist(res.data))
      .catch(err => setErrorMessage(err.message))

  }, [id])



  if (!artist && !errorMessage) {
    return <Container><BeatLoader color="#000000" /></Container>
  }


  const editArtistHandler = (data) => {

    axios.put(`${SERVER_URL}/artists/${id}`, data)
      .then(res => navigator(`/artists/${id}`))
      .catch(err => setErrorMessage(err.message))
  
  }


  return (
    <Container>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ): (
        <ArtistForm initialData={artist} onArtistFormSubmit={editArtistHandler}/>
      )}
    </Container>
  )
}

export default EditArtistPage