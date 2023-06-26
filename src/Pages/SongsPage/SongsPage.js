import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Container from "../../components/Container/Container"
import { SERVER_URL } from "../../config"
import Card from "../../components/Card/Card"

const SongsPage = () => {

  const [songs, setSongs] = useState([]);

  useEffect(() => {

    axios.get(`${SERVER_URL}/songs?_expand=album`)
    .then(res => {
      setSongs(res.data)
    })

  }, [])

  songs && console.log(songs);

  return (
    songs &&
    <Container>
      <h1>All Songs</h1>

      <div className='songs-grid-system banner'>
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span>Duration</span>
      </div>

      <ul className="rows songs">
        {songs.map((song, index) => (

          <li key={index} classes="list-item song">
            <Link to={`/songs/${song.id}`}>
                <Card classes='songs-grid-system'>
                    <span>{index+1}</span>
                
                    <span>{song.title}</span>
                  
                    <span>{song.album.title}</span>
                
                    <span>{song.duration}</span>        
                </Card>
            </Link>
          </li>

        ))}
      </ul>
    </Container>
  )
}

export default SongsPage