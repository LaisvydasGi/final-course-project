import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { SERVER_URL } from '../../config'
import Container from '../../components/Container/Container'
import SongForm from '../../components/SongForm/SongForm'
import Card from '../../components/Card/Card'

const AlbumPage = () => {
  const id = useParams().id;
  const navigator = useNavigate();

  const [album, setAlbum] = useState(null);

  const [toggleForm, setToggleForm] = useState(false);

  const toggleFormBtnHandler = () => setToggleForm(prevState => !prevState);


  useEffect(() => {

    axios.get(`${SERVER_URL}/albums/${id}?_expand=artist&_embed=songs`)
      .then(res => setAlbum(res.data))
      .catch(err => console.log(err))
    
  }, [id, toggleForm])


  const newSongHandler = (newSongData) => {
    
    axios.post(`${SERVER_URL}/songs`, newSongData)
      .then(res => {
        toggleFormBtnHandler()
        navigator(`/albums/${id}`)
      })
      .catch(err => console.log(err.message))
    ;
  }

  

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
      {toggleForm ? (
        <Card>
          <button onClick={toggleFormBtnHandler}>Cancel</button>
          <SongForm albumId={id} onSongFormSubmit={newSongHandler}/>
        </Card>

      ) : (<button onClick={toggleFormBtnHandler}>Add a song</button>)}

      <p>Released at: {album.released}</p>
    </Container>
  )
}

export default AlbumPage