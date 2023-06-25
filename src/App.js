import { Link, Route, Routes } from "react-router-dom"

import MainNav from "./components/MainNav/MainNav"
import Container from "./components/Container/Container"

import UsersPage from "./Pages/UsersPage/UsersPage"
import UserPage from "./Pages/UserPage/UserPage"
import SongsPage from "./Pages/SongsPage/SongsPage"
import SongPage from "./Pages/SongPage/SongPage"
import HomePage from "./Pages/HomePage/HomePage"
import AlbumsPage from "./Pages/AlbumsPage/AlbumsPage"
import AlbumPage from "./Pages/AlbumPage/AlbumPage"
import ArtistsPage from "./Pages/ArtistsPage/ArtistsPage"
import ArtistPage from "./Pages/ArtistPage/ArtistPage"
import EditArtistPage from "./Pages/EditArtistPage/EditArtistPage"
import CreateArtistPage from "./Pages/CreateArtistPage/CreateArtistPage"

function App() {
  return (
    <div className="App">

      <MainNav />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/artists' element={<ArtistsPage/>}/>
        <Route path='/artists/:id' element={<ArtistPage/>}/>
        <Route path='/artists/edit/:id' element={<EditArtistPage/>}/>
        <Route path='/artists/create' element={<CreateArtistPage/>}/>
        <Route path='/songs' element={<SongsPage/>}/>
        <Route path='/songs/:id' element={<SongPage/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/users/:id' element={<UserPage/>}/>
        <Route path='/albums' element={<AlbumsPage/>}/>
        <Route path='/albums/:id' element={<AlbumPage/>}/>

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
