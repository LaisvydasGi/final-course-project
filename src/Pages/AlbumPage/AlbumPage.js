import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { SERVER_URL } from '../../config'
import Container from '../../components/Container/Container'
import SongForm from '../../components/SongForm/SongForm'
import Card from '../../components/Card/Card'
import AlbumForm from '../../components/AlbumForm/AlbumForm'
import DeleteConfirm from '../../components/DeleteConfirm/DeleteConfirm'
import SongsBar from '../../components/SongsBar/SongsBar'

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
        
        <div className='popup-form'>
          <button onClick={toggleAlbumFormBtnHandler}>Cancel</button>
          <AlbumForm artistId={album.artistId} initialData={album} onAlbumFormSubmit={editAlbumHandler}/>
        </div>

      ) : (
        <div className='album-wrapper'>

          <div className='edit-btn-wrapper'>
            <button onClick={toggleAlbumFormBtnHandler}>Edit Info</button>
          </div>

          <DeleteConfirm itemName={album.title} deleteFrom={`/albums/${id}`} navigateTo={`/artists/${album.artistId}`} />

          <Card classes='artist-card large'>

            <div className="img-wrapper">
              <img src={album.imgUrl} alt='album cover'/>
            </div>

            <div className='title-wrapper'>
              {album.songs.length > 1 ? <span>Album</span> : <span>Single</span>}

              <h2>{album.title}</h2>

              <Link to={`/artists/${album.artistId}`} className='parent-link'>
                {album.artist.name}
              </Link>
            </div>
          </Card>

          {album.songs.length > 0 && (
            <>
              <SongsBar inAlbum={true} />

              <ul className="rows songs">
                {album.songs.map((song, index) => (
                  <li key={index}>
                    <Link to={`/songs/${song.id}`}>
                      <Card classes='songs-grid-system list'>
                        <span>{index+1}</span>
                        
                        <span>{song.title}</span>
                      
                        <span></span>
                    
                        <span className='song-length'>{song.duration}</span>
                      </Card>
                    </Link>
                  </li>

                ))}
              </ul>
            </>
          )}

          {toggleSongForm ? (

            <div className='popup-form'>
              <button onClick={toggleSongFormBtnHandler}>Cancel</button>
              <SongForm albumId={id} onSongFormSubmit={newSongHandler}/>
            </div>

          ) : (
          <button onClick={toggleSongFormBtnHandler} className='btn-medium'>Add New Song</button>)}

          <p>Released at: {album.released}</p>
        </div>
      )}
    </Container>
  )
}

export default AlbumPage