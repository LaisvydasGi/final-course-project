import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { SERVER_URL } from "../../config"
import Container from "../../components/Container/Container"

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/artists`)
      .then(res => setArtists(res.data))
  }, [])

  return (
    <Container>
      <h1>Artists:</h1>
      <ul>
        {artists.map(artist => (

          <li key={artist.id}>
            <Link to={`/artists/${artist.id}`}>
              ({artist.id}) {artist.name}
            </Link>
          </li>
          
        ))}
      </ul>
    </Container>
  )
}

export default ArtistsPage