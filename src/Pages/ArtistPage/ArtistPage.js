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

      <div className="btn-wrapper">
        <Link to={`/artists/edit/${id}`} className="btn-small">Edit Info</Link>
      </div>

      <DeleteConfirm itemName={artist.name} deleteFrom={`/artists/${id}`} navigateTo={`/artists/`} />

      <div>
        <Card classes='artist-card large'>

          <div className="image-wrapper thumbnail">
            <img className="medium artist" src={artist.picture.imgUrl} alt='artist image'/>
          </div>

          <div className="title-wrapper thumbnail">
            <h1>{artist.name}</h1>
          </div>

        </Card>

        <details>
          <summary className="about-artist">About the artist</summary>
          <p>{artist.description}</p>
        </details>
        
      </div>

      <div>
        <h2>Discography</h2>

        <div className="btn-wrapper">
          <Link to={`/albums/create/${id}`} className="btn-medium">Add New Album</Link>
        </div>

        <ul className="columns album">
          {artist.albums.map(album => (

            <li key={album.id} classes="list-item album">
              <Link to={`/albums/${album.id}`}>

                <Card classes='album-card small'>

                  <div className="image-wrapper">
                    <img className="album thumbnail" src={album.imgUrl} alt='album cover' />
                  </div>

                  <div className="title-wrapper thumbnail">
                    <span className="title album">{album.title}</span>
                    <span className="subtitle">{album.released}</span>
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