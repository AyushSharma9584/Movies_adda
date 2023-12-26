
import './App.css';

import Header from './Components/header/Header' 
import Home from './Pages/Home/Home'
import MovieList from './Components/movieList/MovieList'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MovieDetail from './Pages/movieDetail/MovieDetail';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='movie/:id' element={<MovieDetail/>}/>
          <Route path='movies/:type' element={<MovieList/>}/>
          <Route path='/*' element={<h1>Error</h1>}/>
        </Routes>
      
      </Router>
      
     
    </div>
  );
}

export default App;
