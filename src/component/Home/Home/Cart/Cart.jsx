import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({ movie }) => {
  console.log(movie?.show?.status);
  // const {image: show.image} = movie
  return (
    <div className='col-12 col-md-6 col-lg-4 flex flex-col my-2 my-md-4 my-lg-5'>
      <div className='card'>
        <div className='flex h-50'>
          <img
            src={movie?.show?.image?.original}
            className='card-img-top img-fixed-height '
            alt='banner'
          />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>Movie Name: {movie?.show?.name}</h5>
          <div className='d-flex flex-column flex-md-row justify-content-md-between'>
            <div>
              <p className='text-info fs-6'>Status: {movie?.show?.status}</p>
              <p className='text-info fs-6'>Release: {movie?.show?.ended}</p>
            </div>
            <div>
              <p className='text-success fs-6'>
                Language: {movie?.show?.language}
              </p>
              <p className='text-success fs-6'>
                Duration: {movie?.show?.averageRuntime} min
              </p>
            </div>
          </div>
          <div className=''>
            <Link to='/more-info' className='btn btn-primary w-100'>
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
