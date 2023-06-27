import { NavLink } from "react-router-dom"
import Container from "../../components/Container/Container"
import logo from '../../images/logo.svg'

const HomePage = () => {
  return (
    <Container>
       <div className="index-wrapper">
        <h1>"Musify"</h1>

        <img src={logo} alt="logo" width="200px" className="icon"/>

        <h2>Final Course Project</h2>
        <h3>Front-end Serverless</h3>
        
        <div className="index-banner">
          <span>Check out the project</span>
        </div>
          <nav className='main-nav'>
            <ul className='nav-list'>

              <li className='nav-item'>
                <NavLink to='/artists' className='nav-link'>Artists</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/albums' className='nav-link'>Albums</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/songs' className='nav-link'>Songs</NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/users' className='nav-link'>Users</NavLink>
              </li>
            </ul>
          </nav>

      </div>
    </Container>
    
  )
}

export default HomePage