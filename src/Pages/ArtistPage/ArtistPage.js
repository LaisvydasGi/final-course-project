import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { SERVER_URL } from "../../config"
import axios from "axios"
import Container from "../../components/Container/Container"
import Card from "../../components/Card/Card"
import { BounceLoader } from "react-spinners"
import DeleteConfirm from "../../components/DeleteConfirm/DeleteConfirm"

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


  if (!artist) {
    return <BounceLoader color="#000000" />;
  }

  return (
    <Container>
      <div>
        <Link to={`/artists/edit/${id}`}>Edit Artist Info</Link>
      </div>

      <DeleteConfirm itemName={artist.name} deleteFrom={`/artists/${id}`} navigateTo={`/artists/`} />

      <div>
        <h1>{artist.name} </h1>
        <p>{artist.description}</p>
      </div>

      <div>
        <h2>Popular songs:</h2>

      </div>

      <div>
        <h2>Discography</h2>
        <Link to={`/albums/create/${id}`}>Add New Album</Link>
        
        <ul>
          {artist.albums.map(album => (
            <li key={album.id} className="">
              <Link to={`/albums/${album.id}`}>
                <Card>
                  <div>
                    <img src={album.imgUrl} alt='album cover'/>
                  </div>

                  <div>
                    {album.id}. {album.title}
                  </div>

                </Card>
              </Link>
            </li>
          ))}
        </ul>

      </div>
      

    </Container>
  )
}

export default ArtistPage