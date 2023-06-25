import { useEffect, useState } from "react"
import { SERVER_URL } from "../../config"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import Container from "../../components/Container/Container"

const SongPage = () => {
  const id = useParams().id;

  const [song, setSong] = useState(null)


  useEffect(() => {

    axios.get(`${SERVER_URL}/songs/${id}?_expand=album`)
      .then(res => {
        setSong(res.data);
      })
      .catch(err => console.log(err))
    
  }, [id])

  return (
    song && 
    <Container>
      <h2>{song.title}</h2>

      <p>Duration: {song.duration}</p>
      
      <p>Album:
        <Link to={`/albums/${song.albumId}`}>
          {song.album.title}
        </Link>
      </p>

      <p>Released at: {song.album.released}</p>
    </Container>
  )
}

export default SongPage