import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { SERVER_URL } from "../../config"
import axios from "axios"

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

        axios.get(`${SERVER_URL}/songs/${item.songId}`)
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
    <div>
      <button>Delete User</button>
      {/* <Link to={`/users/edit/${user.id}`}>Edit User</Link> */}
      <h2>{user.id}. {user.username} </h2>
      <p>Username: {user.username}</p>
      <h3>Liked songs:</h3>
      <ul>
        {user && user.likedSongs.map((likedSong, index) => {
          const song = songs.find(it => it.id === likedSong.songId)

          if(!song) {
            return ''
          } else {
            return (
              <li key={index}>
                <Link to={`/songs/${song.id}`}>
                  {song.title}
                </Link>
              </li>
            )
          }
        })}
      </ul>

    </div>
  )
}

export default UserPage