import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { SERVER_URL } from "../../config"
import Container from "../../components/Container/Container"
import Card from "../../components/Card/Card"

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/users`)
      .then(res => setUsers(res.data))
  }, [])

  return (
    <Container>
      <h1>Users:</h1>

      <div className="btn-wrapper">
        <Link to='/users/create' className="btn-medium">Add New User</Link>
      </div>

      <ul className="rows artist">
        {users.map(user => (

          <li key={user.id} className="list-item artist">
            <Link to={`/users/${user.id}`}>

              <Card classes='artist-card small'>

                <div className="image-wrapper thumbnail">
                  <img className="thumbnail artist" src={user.picture.url} alt="user"/>
                </div>

                <div className="title-wrapper thumbnail">
                  <span className="title">{user.name}</span>
                </div>

              </Card>
            </Link>
          </li> 
        ))}
      </ul>
      
    </Container>
  )
}

export default UsersPage