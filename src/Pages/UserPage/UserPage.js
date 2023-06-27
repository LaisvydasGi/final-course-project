import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { SERVER_URL } from "../../config"
import axios from "axios"
import Container from "../../components/Container/Container"
import DeleteConfirm from "../../components/DeleteConfirm/DeleteConfirm"
import Card from "../../components/Card/Card"
import SongsBar from "../../components/SongsBar/SongsBar"

const UserPage = () => {
  const id = useParams().id;

  const [user, setUser] = useState(null);
  const [songs, setSongs] = useState([]);



  useEffect(() => {

    axios.get(`${SERVER_URL}/users/${id}?_embed=likedSongs`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err))

  }, [id])


  useEffect(() => {

    if (user) {

      user.likedSongs.forEach(item => {

        axios.get(`${SERVER_URL}/songs/${item.songId}?_expand=album`)
          .then(res => {
            setSongs(prevState => {

              const newState = [res.data, ...prevState];
              return newState;
            });
          }).catch(err => console.log(err));
      })
    }
  }, [user])



  if (!user) {
    return '';
  }

  return (
    <Container>
      
      <div className="btn-wrapper">
        <Link to={`/users/edit/${id}`} className="btn-small">Edit Info</Link>
      </div>

      <DeleteConfirm itemName={user.name} deleteFrom={`/users/${id}`} navigateTo={`/users/`} />
      

      <Card classes='artist-card large'>

        <div className="image-wrapper thumbnail">
          <img className="medium artist" src={user.picture.url} alt='user'/>
        </div>

        <div className="title-wrapper thumbnail">
          <h1>{user.name}</h1>
          <span>({user.login.username})</span>
        </div>

      </Card>

      {songs.length > 0 && (
        <>
          <h3>Liked songs:</h3>

          <SongsBar/>

          <ul className="rows songs">
            {user && user.likedSongs.map((likedSong, index) => {
              
              const song = songs.find(it => it.id === likedSong.songId)

              if(!song) {
                return ''
              } else {
                return (

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

                )
              }
            })}
          </ul>
        </>
      )}

      <div>
        <span>Last edited: {user.registered.date}</span>
      </div>
    
    </Container>
  )
}

export default UserPage