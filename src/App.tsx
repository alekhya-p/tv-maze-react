import './App.css'
import Home from './views/Home/Home'
import NavBar from './components/NavBar/NavBar'
import { StoreContextProvider } from './store/StoreContext'
import { Route, Routes } from "react-router-dom";
import Shows from './views/Shows/Shows'
import PopularShows from './views/PopularShows/PopularShows'
import SearchDetails from './views/SearchDetails/SearchDetails';
import DetailsPage from './views/DetailsPage/DetailsPage';

function App() {

  return (
    <>
    <StoreContextProvider>
    <div className='app'>
    <NavBar/>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/shows' Component={Shows}></Route>
        <Route path='/popularShows' Component={PopularShows}></Route>
        <Route path='/searchPage/:query' Component={SearchDetails}></Route>
        <Route path='/tvShow/:id' Component={DetailsPage}></Route>
      </Routes>
      </div>
    </StoreContextProvider>
    </>
  )
}

export default App
