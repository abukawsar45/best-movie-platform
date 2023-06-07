import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './MoreInfo.css'
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css';

const MoreInfo = () => {
 const movieScore = useParams();
 const [movieData, setMovieData] = useState([]);
 console.log(movieData)
 console.log(movieData?.show?.network?.country);

    useEffect(() => {
      fetch('https://api.tvmaze.com/search/shows?q=all')
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const myData = data.find((item) => item?.score == movieScore.id);
          setMovieData(myData);
        });
    }, []);

  return (
    <div className='card mb-3'>
      <img
        src={
          movieData?.show?.image?.original
            ? movieData?.show?.image?.original
            : 'not available'
        }
        className='card-img-top img-custom-height'
        alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title fs-2'>
          Movie Name:{' '}
          {movieData?.show?.name ? movieData?.show?.name : 'not available'}
        </h5>
        <div className='d-flex flex-column flex-md-row justify-content-md-between'>
          <div>
            <p className='text-info fs-5'>
              Status:{' '}
              {movieData?.show?.status
                ? movieData?.show?.status
                : 'not available'}
            </p>
            <p className='text-info fs-5'>
              Release:{' '}
              {movieData?.show?.ended
                ? movieData?.show?.ended
                : 'not available'}
            </p>
          </div>
          <div>
            <p className='text-success fs-5'>
              Language:{' '}
              {movieData?.show?.language
                ? movieData?.show?.language
                : 'not available'}
            </p>
            <p className='text-success fs-5'>
              Duration:{' '}
              {movieData?.show?.averageRuntime
                ? movieData?.show?.averageRuntime
                : 'not available'}
              min
            </p>
          </div>
          <div>
            <p className='text-success fs-5'>
              Type:{' '}
              {movieData?.show?.type ? movieData?.show?.type : 'not available'}
            </p>
            <p className='text-success fs-5 d-flex align-items-center '>
              Ratings:&#160;
              {
                <small>
                  {' '}
                  <Rating
                    value={
                      movieData?.show?.rating?.average > 5
                        ? 5
                        : movieData?.show?.rating?.average
                    }
                    className='fs-6'
                    style={{ maxWidth: 140 }}
                    isDisabled
                  />
                </small>
              }
            </p>
          </div>

          <div>
            {movieData?.show?.genres.map((gen) => (
              <ul key={gen}>
                <li className='text-success fs-5'>{gen}</li>
              </ul>
            ))}
          </div>
        </div>
        <div>
          <p className=''>
            {movieData?.show?.summary
              ? movieData?.show?.summary
              : 'not available'}
          </p>
        </div>
        <div>
          <Link
            to={`/booking/${movieData?.score}`}
            className='btn btn-primary w-100'
          >
            Booking Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;