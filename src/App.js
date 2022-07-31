import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Trending from './components/Pages/Trending/Trending';
import Search from './components/Pages/Search/Search';
import { Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending/>} ></Route>
            <Route path="/movies" element={<Movies/>}></Route>
            <Route path="/series" element={<Series/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
