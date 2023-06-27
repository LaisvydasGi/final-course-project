import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { SERVER_URL } from '../../config'
import Container from '../../components/Container/Container'
import AlbumForm from '../../components/AlbumForm/AlbumForm'

const CreateAlbumPage = () => {
  const artistId = useParams().id;
  const navigator = useNavigate();

  const [artist, setArtist] = useState(null);

  const [formErrorMessage, setFormErrorMessage] = useState('')


  useEffect(() => {

    axios.get(`${SERVER_URL}/artists/${artistId}`)
      .then(res => {
        setArtist(res.data);
      })
      .catch(err => console.log(err))

  }, [artistId])

  
  const createAlbumHandler = (newAlbumData) => {

    axios.post(`${SERVER_URL}/albums`, newAlbumData)
      .then(res => navigator(`/artists/${artistId}`))
      .catch(err => setFormErrorMessage(err.message))

  }

  return (
    artist &&
    <Container>
      <h1>{artist.name}</h1>
      <h2>Create New Album</h2>
      <AlbumForm artistId={artistId} onAlbumFormSubmit={createAlbumHandler}/>

      {formErrorMessage && <p>{formErrorMessage}</p>}
    </Container>  
  )
}

export default CreateAlbumPage