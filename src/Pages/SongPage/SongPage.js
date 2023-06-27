import { useEffect, useState } from "react"
import { SERVER_URL } from "../../config"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import Container from "../../components/Container/Container"
import SongForm from "../../components/SongForm/SongForm"
import Card from "../../components/Card/Card"
import DeleteConfirm from "../../components/DeleteConfirm/DeleteConfirm"

const SongPage = () => {
  const id = useParams().id;
  const navigator = useNavigate()

  const [song, setSong] = useState(null)
  // const [users, setUsers] = useState(null)

  const [toggleForm, setToggleForm] = useState(false);

  const viewToggleBtnHandler = () => setToggleForm(prevState => !prevState);

  useEffect(() => {

    axios.get(`${SERVER_URL}/songs/${id}?_expand=album`)
      .then(res => setSong(res.data))
      .catch(err => console.log(err))
    
  }, [id, toggleForm])


  const editSongHandler = (songData) => {
    
    axios.put(`${SERVER_URL}/songs/${id}`, songData)
      .then(res => {
        viewToggleBtnHandler();
        navigator(`/songs/${id}`)
      })
      .catch(err => console.log(err.message));
  }


  // useEffect(() => {

  //   axios.get(`${SERVER_URL}/users`)
  //     .then(res => setUsers(res.data))
  //     .catch(err => console.log(err))
    
  // }, [id, toggleForm])


  return (
    song && 
    <Container>
      {toggleForm ? (
        <div className='popup-form'>
          <button onClick={viewToggleBtnHandler}>Cancel</button>
          <SongForm albumId={song.albumId} initialData={song} onSongFormSubmit={editSongHandler} />
        </div>
      ) : (
        <div className="song-wrapper">

          <div className="song-edit-controls">
            <button onClick={viewToggleBtnHandler}>Edit Info</button>
            <DeleteConfirm itemName={song.title} deleteFrom={`/songs/${id}`} navigateTo={`/albums/${song.albumId}`} />
          </div>

          <div className="song-item">

            <Card classes='artist-card large'>

              <div className="img-wrapper">
                <img src={song.album.imgUrl} alt='album cover'/>
              </div>

              <div className='title-wrapper'>
                <span>Song</span>

                <h2>{song.title}</h2>

                <span>{song.duration}</span> 

              </div>
            </Card>

            <div className="">
              <span>From: <Link to={`/albums/${song.albumId}`} className='parent-link'>{song.album.title}</Link></span>
            </div>
            <div>
              <span>Released at: {song.album.released}</span>
            </div>

          </div>
        </div>
      )}
    </Container>
  )
}

export default SongPage