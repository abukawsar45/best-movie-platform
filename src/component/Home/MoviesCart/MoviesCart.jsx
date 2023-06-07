import { useEffect, useState } from 'react';
import Cart from '../Home/Cart/Cart';

const MoviesCart = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetch ('https://api.tvmaze.com/search/shows?q=all').then(res=>res.json()).then(data=>{
      console.log(data)
      setMoviesData(data)
    })
  },[])
  return (
    <div>
      <div className='row'>
        {moviesData.map((movie) => (
          <Cart key={movie.show.genres.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesCart;