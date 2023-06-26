import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { SERVER_URL } from "../../config"
import Container from "../../components/Container/Container"

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/users`)
      .then(res => setUsers(res.data))
  }, [])

  return (
    <Container>
      <h1>Users:</h1>
      <ul className="users-list">
        {users.map(user => (

          <li key={user.id} className="user-item">
            <Link to={`/users/${user.id}`}>
              <div className="user-thumbnail-wrapper">
                <img className="user-thumbnail" src={user.picture.thumbnail} />
              </div>
              <div className="user-name-wrapper">
              <span>{user.name.first} {user.name.last}</span>

              </div>
            </Link>
          </li>
          
        ))}
      </ul>
      <Link to='/users/create'>Add New User</Link>
    </Container>
  )
}

export default UsersPage