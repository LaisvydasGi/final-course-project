import './MainNav.css';
import logo from './logo.svg'
import { NavLink } from "react-router-dom"

const MainNav = () => {
  return(
    <nav className='main-nav'>
      <ul className='nav-list'>

        <li className='nav-item'>
          <NavLink to='/' className='nav-link'>
            <img src={logo} className='nav-logo' alt='logo'/>
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/songs' className='nav-link'>Songs</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/users' className='nav-link'>Users</NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default MainNav