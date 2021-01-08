import React { useEffect, useState } from "react";

import Movie from './components/Movie';

const FEATURED_APi = "https://api.themoviedb.or/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMAGES_API = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const movieResp = await fetch(FEATURED_API);
    CONST movies = await moviesResp.json();

    setMovies(movies);


  }, [])


  return <div>
    {movies.map(movie => (
      <Movie />
    ))}

  </div>;

}

export default App;
