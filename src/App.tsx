import './App.css'
import Home from './views/Home/Home'
import NavBar from './components/NavBar/NavBar'
import { StoreContextProvider } from './store/StoreContext'
import { Route, Routes } from "react-router-dom";
import Shows from './views/Shows/Shows'
import PopularShows from './views/PopularShows/PopularShows'

function App() {

  return (
    <>
    <StoreContextProvider>
    <div className='app'>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shows' element={<Shows />}></Route>
        <Route path='/popularShows' element={<PopularShows />}></Route>
      </Routes>
        <Home />
      </div>
    </StoreContextProvider>
    </>
  )
}

export default App
