import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { SERVER_URL } from "../../config"
import Container from "../../components/Container/Container"
import Card from "../../components/Card/Card"

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/artists`)
      .then(res => setArtists(res.data))
  }, [])

  return (
    <Container>
      <h1>Artists:</h1>

      <div className="btn-wrapper">
        <Link to='/artists/create' className="btn-medium">Add New Artist</Link>
      </div>
      
      <ul className="rows artist">
        {artists.map(artist => (

          <li key={artist.id} classes="list-item artist">
            <Link to={`/artists/${artist.id}`}>

              <Card classes='artist-card small'>

                <div className="image-wrapper thumbnail">
                  <img className="thumbnail artist" src={artist.picture.imgUrl}  width='100px' alt='artist'/>
                </div>

                <div className="title-wrapper thumbnail">
                  <span className="title">{artist.name}</span>
                </div>

              </Card>
            </Link>
          </li>
          
        ))}
      </ul>

    </Container>
  )
}

export default ArtistsPage