import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios, { AxiosHeaders } from "axios"

import Container from "../../components/Container/Container"
import { SERVER_URL } from "../../config"

const SongsPage = () => {

  const [songs, setSongs] = useState([]);



  useEffect(() => {

    axios.get(`${SERVER_URL}/songs`)
    .then(res => {
      setSongs(res.data)
    })

  }, [])



  return (
    <Container>
      <h1>All Songs</h1>
      <ul>
        {songs.map(song => (

          <li key={song.id}>
            <Link to={`/songs/${song.id}`}>
              {song.id}. {song.title}
            </Link>
          </li>
          
        ))}
      </ul>
    </Container>
  )
}

export default SongsPage