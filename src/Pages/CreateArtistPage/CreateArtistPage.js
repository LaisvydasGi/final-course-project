import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import Container from '../../components/Container/Container'
import { SERVER_URL } from '../../config'
import { BeatLoader } from "react-spinners"
import ArtistForm from '../../components/ArtistForm/ArtistForm'

const CreateArtistPage = () => {
  const navigator = useNavigate();

  const [formErrorMessage, setFormErrorMessage] = useState('')

  const createArtistHandler = (newArtistData) => {

    axios.post(`${SERVER_URL}/artists`, newArtistData)
      .then(res => navigator(`/artists/${res.data.id}`))
      .catch(err => setFormErrorMessage(err.message))

  }

  return (
    <Container>
      <h2>Add New Artist</h2>
      <ArtistForm onArtistFormSubmit={createArtistHandler}/>

      {formErrorMessage && <p>{formErrorMessage}</p>}
    </Container>  
  )
}

export default CreateArtistPage