import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { SERVER_URL } from "../../config"
import axios from "axios"
import Container from "../../components/Container/Container"
import Card from "../../components/Card/Card"
import { BounceLoader } from "react-spinners"

const ArtistPage = () => {
  const id = useParams().id;
  const navigator = useNavigate();

  const [artist, setArtist] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(false);
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

  const deleteBtnHandler = () => setDeleteStatus(true);
  const noDeleteBtnHandler = () => setDeleteStatus(false);

  const yesDeleteBtnHandler = () => {
    axios.delete(`${SERVER_URL}/artists/${id}`)
      .then(res => navigator('/artists'))
      .catch(err => console.log(err.message))
  }

  artist && console.log(artist);

  return (
    <Container>
      <Link to={`/artists/edit/${id}`}>Edit Artist Info</Link>
      <button onClick={deleteBtnHandler}>Delete Artist</button>
      {deleteStatus ? (
        <Card>
          <h3>Are you sure you want to delete this artist?</h3>
          <button onClick={yesDeleteBtnHandler}>Yes</button>
          <button onClick={noDeleteBtnHandler}>No</button>
        </Card>
      ) : ''}
      <h1>{artist.name} </h1>
      <p>{artist.description}</p>
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