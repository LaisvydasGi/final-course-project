import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Container from "../../components/Container/Container"
import { SERVER_URL } from "../../config"
import Card from "../../components/Card/Card"

const AlbumsPage = () => {

  const [albums, setAlbums] = useState([]);


  useEffect(() => {

    axios.get(`${SERVER_URL}/albums?_expand=artist`)
    .then(res => {
      setAlbums(res.data)
    })

  }, [])


  return (
    albums &&
    <Container>
      <h1>Albums</h1>
      <ul className="columns album">
        {albums.map(album => (

          <li key={album.id} classes="list-item album">

            <Link to={`/albums/${album.id}`}>

              <Card classes='album-card'>

                <div className="image-wrapper">
                  <img className="album thumbnail" src={album.imgUrl} alt='album cover' />
                </div>

                <div className="title-wrapper thumbnail">
                  <span className="title album">{album.title}</span>
                  <span className="subtitle">{album.artist.name}</span>
                </div>

              </Card>
            </Link>
          </li>
          
        ))}
      </ul>
    </Container>
  )
}

export default AlbumsPage