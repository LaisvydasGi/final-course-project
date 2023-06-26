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

      <Link to='/users/create'>Add New User</Link>
      <ul className="rows artist">
        {users.map(user => (

          <li key={user.id} className="list-item artist">
            <Link to={`/users/${user.id}`}>

              <Card classes='artist-card'>

                <div className="image-wrapper thumbnail">
                  <img className="thumbnail artist" src={user.picture.medium} />
                </div>

                <div className="title-wrapper thumbnail">
                  <span className="title">{user.name.first} {user.name.last}</span>
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