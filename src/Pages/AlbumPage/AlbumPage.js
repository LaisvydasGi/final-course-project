import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { SERVER_URL } from '../../config'
import Container from '../../components/Container/Container'

const AlbumPage = () => {
  const id = useParams().id;

  const [album, setAlbum] = useState(null);


  useEffect(() => {

    axios.get(`${SERVER_URL}/albums/${id}?_expand=artist&_embed=songs`)
      .then(res => setAlbum(res.data))
      .catch(err => console.log(err))
    
  }, [id])


  return (
    album && 
    <Container>
      <div className="img-wrapper">
        <img src={album.imgUrl} alt='album cover'/>
      </div>
      <div className='title-wrapper'>

        <span>Album</span>

        <h2>{album.title}</h2>

        <Link to={`/artists/${album.artistId}`}>
          {album.artist.name}
        </Link>

      </div>
      <ul>

        {album.songs.map((song, index) => (
          <li key={index}>
            <Link to={`/songs/${song.id}`}>
              {index+1}. {song.title}
            </Link>
          </li>

        ))}
      </ul>

      <p>Released at: {album.released}</p>
    </Container>
  )
}

export default AlbumPage