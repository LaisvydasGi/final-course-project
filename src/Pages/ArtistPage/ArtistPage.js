import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { SERVER_URL } from "../../config"
import axios from "axios"
import Container from "../../components/Container/Container"
import Card from "../../components/Card/Card"

const ArtistPage = () => {
  const id = useParams().id;

  const [artist, setArtist] = useState(null);
  // const [songs, setSongs] = useState([]);


  useEffect(() => {

    axios.get(`${SERVER_URL}/artists/${id}?_embed=albums`)
      .then(res => {
        setArtist(res.data);
      })
      .catch(err => console.log(err))

  }, [id])

  artist && console.log(artist);

  if (!artist) {
    return '';
  }

  return (
    <Container>
      <button>Delete artist</button>
      <h1>{artist.name} </h1>
      <p>: {artist.name}</p>
      <h2>Popular songs:</h2>
      <h2>Discography</h2>
      <ul>
        {artist.albums.map(album => (
          <li key={album.id} className="">
            <Link to={`/albums/${album.id}`}>
              <Card>

                <div>
                  <img src={album.url} alt='album cover'/>
                </div>

                <div>
                  {album.id}. {album.title}
                </div>

              </Card>
            </Link>
          </li>
        ))}

      </ul>

    </Container>
  )
}

export default ArtistPage