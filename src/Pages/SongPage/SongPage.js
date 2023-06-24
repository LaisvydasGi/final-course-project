import { useEffect, useState } from "react"
import { SERVER_URL } from "../../config"
import axios from "axios"
import { useParams } from "react-router-dom"

const SongPage = () => {
  const id = useParams().id;

  const [song, setSong] = useState(null)


  useEffect(() => {

    axios.get(`${SERVER_URL}/songs/${id}`)
      .then(res => {
        setSong(res.data);
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    song && 
    <div>
        <h2>{song.title}</h2>
        <p>From album: {song.albumId}</p>
    </div>
    
  )
}

export default SongPage