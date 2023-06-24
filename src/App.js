import { Route, Routes } from "react-router-dom"
import UsersPage from "./Pages/UsersPage/UsersPage"
import UserPage from "./Pages/UserPage/UserPage"
import SongsPage from "./Pages/SongsPage/SongsPage"
import SongPage from "./Pages/SongPage/SongPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/songs' element={<SongsPage/>}/>
        <Route path='/songs/:id' element={<SongPage/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/users/:id' element={<UserPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
