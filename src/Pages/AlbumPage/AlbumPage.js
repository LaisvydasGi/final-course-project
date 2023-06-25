import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { SERVER_URL } from '../../config'
import Container from '../../components/Container/Container'
import SongForm from '../../components/SongForm/SongForm'
import Card from '../../components/Card/Card'
import AlbumForm from '../../components/AlbumForm/AlbumForm'
import DeleteConfirm from '../../components/DeleteConfirm/DeleteConfirm'

const AlbumPage = () => {
  const id = useParams().id;
  const navigator = useNavigate();

  const [album, setAlbum] = useState(null);

  const [toggleSongForm, setToggleSongForm] = useState(false);
  const [toggleAlbumForm, setToggleAlbumForm] = useState(false);

  const toggleSongFormBtnHandler = () => setToggleSongForm(prevState => !prevState);

  const toggleAlbumFormBtnHandler = () => setToggleAlbumForm(prevState => !prevState);


  useEffect(() => {

    axios.get(`${SERVER_URL}/albums/${id}?_expand=artist&_embed=songs`)
      .then(res => setAlbum(res.data))
      .catch(err => console.log(err))
    
  }, [id, toggleSongForm, toggleAlbumForm])



  const editAlbumHandler = (albumData) => {
    
    axios.put(`${SERVER_URL}/albums/${id}`, albumData)
      .then(res => {
        toggleAlbumFormBtnHandler();
        navigator(`/albums/${id}`)
      })
      .catch(err => console.log(err.message));
  }


  const newSongHandler = (newSongData) => {
    
    axios.post(`${SERVER_URL}/songs`, newSongData)
      .then(res => {
        toggleSongFormBtnHandler()
        navigator(`/albums/${id}`)
      })
      .catch(err => console.log(err.message))
    ;
  }

  
  return (
    album && 
    <Container>
      {toggleAlbumForm ? (
        
        <Card>
          <button onClick={toggleAlbumFormBtnHandler}>Cancel</button>
          <AlbumForm artistId={album.artistId} initialData={album} onAlbumFormSubmit={editAlbumHandler}/>
        </Card>

      ) : (
        <div className='album-wrapper'>

          <div className='edit-btn-wrapper'>
            <button onClick={toggleAlbumFormBtnHandler}>Edit Album Info</button>
          </div>

          <DeleteConfirm itemName={album.title} deleteFrom={`/albums/${id}`} navigateTo={`/artists/${album.artistId}`} />

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

          {toggleSongForm ? (

            <Card>
              <button onClick={toggleSongFormBtnHandler}>Cancel</button>
              <SongForm albumId={id} onSongFormSubmit={newSongHandler}/>
            </Card>

          ) : (<button onClick={toggleSongFormBtnHandler}>Add a song</button>)}

          <p>Released at: {album.released}</p>
        </div>
      )}
    </Container>
  )
}

export default AlbumPage