import { NavLink } from "react-router-dom"
import './MainNav.css';

import logo from './logo.svg'
import Container from '../Container/Container'

const MainNav = () => {

  console.log(logo);

  return(
    <header className='main-header'>
      <Container classes='nav-container'>
        <nav className='main-nav'>
          <div>
            <NavLink to='/' className='nav-link'>
              <img src={logo} className='nav-logo' alt='logo' width='40rem'/>
            </NavLink>
          </div>
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
      </Container>
    </header>
  );
}

export default MainNav