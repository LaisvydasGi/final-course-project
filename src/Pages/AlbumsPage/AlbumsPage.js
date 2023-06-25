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
      <ul>
        {albums.map(album => (

          <li key={album.id} className="">
            <Link to={`/albums/${album.id}`}>
              <Card>
                <div>
                  <img src={album.imgUrl} alt='album cover'/>
                </div>
                <div>
                  {album.id}. {album.title}
                </div>
                <div>
                  {album.artist.name}
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