import './App.css';
import Search from './components/search.js'
import Movies from './components/movies.js'

import { useState, useEffect } from 'react';

function App() {
  
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const getMoviesByYear = async (year, object) => {

    const response = await fetch(`http://www.omdbapi.com/?t=${object}&y=${year}&apikey=f01633e3`);

    if (response.ok) {
      const data = await response.json();
      setMovies((prev) => [...prev, data]);
    } else {
      console.log("something went wrong with the api request");
    }
  }

  const getMovies = async (object) => {

    const response = await fetch(`http://www.omdbapi.com/?t=${object}&apikey=f01633e3`);

    if (response.ok) {
      console.log(response)
      const data = await response.json();
      if (data.Response !== 'False') {
        setMovies((prev) => [...prev, data]);
      }
    } else {
      console.log("something went wrong with the api request");
    }
  }

  useEffect(() => {
    const years = [2000, 2004, 2008, 2010, 2012];
    years.forEach((year) => getMoviesByYear(year, "star wars"));
  }, [])

  const handleSubmitSearch = () => {
    getMovies(search);
  }

  // med andre forutsetninger ville jeg gjort det annerledes.
  return (
    <main>
      <Search setSearch={setSearch}/>
      <button type="submit" onClick={handleSubmitSearch}>search</button>
      <Movies movies={movies} />
    </main>
  );
}

export default App;
