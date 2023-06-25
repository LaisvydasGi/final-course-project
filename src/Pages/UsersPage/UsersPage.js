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
      <ul>
        {users.map(user => (

          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              ({user.id}) {user.username}
            </Link>
          </li>
          
        ))}
      </ul>
      <Link to='/users/create'>Add New User</Link>
    </Container>
  )
}

export default UsersPage