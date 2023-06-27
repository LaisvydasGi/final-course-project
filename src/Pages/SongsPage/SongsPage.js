import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Container from "../../components/Container/Container"
import { SERVER_URL } from "../../config"
import Card from "../../components/Card/Card"
import SongsBar from "../../components/SongsBar/SongsBar"

const SongsPage = () => {

  const [songs, setSongs] = useState([]);

  useEffect(() => {

    axios.get(`${SERVER_URL}/songs?_expand=album`)
    .then(res => {
      setSongs(res.data)
    })

  }, [])

  return (
    songs &&
    <Container>
      <h1>Songs:</h1>

      <SongsBar/>

      <ul className="rows songs">
        {songs.map((song, index) => (

          <li key={index} classes="list-item song">
            <Link to={`/songs/${song.id}`}>
                <Card classes='songs-grid-system list'>
                    <span>{index+1}</span>
                
                    <span>{song.title}</span>
                  
                    <span>{song.album.title}</span>
                
                    <span className='song-length'>{song.duration}</span>        
                </Card>
            </Link>
          </li>

        ))}
      </ul>
    </Container>
  )
}

export default SongsPage