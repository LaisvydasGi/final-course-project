import { Link, Route, Routes } from "react-router-dom"

import MainNav from "./components/MainNav/MainNav"
import Container from "./components/Container/Container"

import UsersPage from "./Pages/UsersPage/UsersPage"
import UserPage from "./Pages/UserPage/UserPage"
import SongsPage from "./Pages/SongsPage/SongsPage"
import SongPage from "./Pages/SongPage/SongPage"
import HomePage from "./Pages/HomePage/HomePage"

function App() {
  return (
    <div className="App">

      <header className='main-header'>
        <Container classes='nav-container'>
          <MainNav/>
        </Container>
      </header>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/songs' element={<SongsPage/>}/>
        <Route path='/songs/:id' element={<SongPage/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/users/:id' element={<UserPage/>}/>

        <Route path='*' element={
          <Container>
            <h1>404 error. Page not found...</h1>
            <Link to='/'>Go back to Home page</Link>
          </Container>
        } />

      </Routes>
    </div>
  );
}

export default App;
