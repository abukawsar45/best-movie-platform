import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from '../../utilities/localStorage';

const BookingForm = () => {
   const movieScore = useParams();
  const [movieData, setMovieData] = useState([]);
  const id = movieScore.id;
  const navigate = useNavigate();

   useEffect(() => {
     fetch('https://api.tvmaze.com/search/shows?q=all')
       .then((res) => res.json())
       .then((data) => {
         // console.log(data);
         const myData = data.find((item) => item?.score == movieScore.id);
         setMovieData(myData);
         
       });
   }, []);

  const handleBookingButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const quantity = form.quantity.value;
    // console.log(quantity, category,id);
    addToCart(id, quantity)
    navigate('/')
    
   
  }
  
  return (
    <div>
      <form onSubmit={handleBookingButton}>
        <div>
          <fieldset>
            <legend>Disabled fieldset example</legend>
            <div className='mb-3 '>
              <label className='form-label'>Movie Name</label>
              <input
                type='text'
                id='inputName'
                value={movieData?.show?.name}
                className='form-control w-100 mw-md-50'
                
              />
            </div>
            <div className='mb-3 '>
              <label className='form-label'>Booking Date</label>
              <input type='date' id='inputDate' className='form-control ' required={true} />
            </div>
            <div className='mb-3 '>
              <label className='form-label'>Quantity</label>
              <select
                className='form-select'
                name='quantity'
                aria-label='Default select example'
                required={true}
              >
                <option selected>1</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </div>
            <div className='mb-3 '>
              <label className='form-label'>Booking Category</label>
              <select
                className='form-select'
                name='category'
                aria-label='Default select example'
                required={true}
              >
                <option value='450'>E-FRONT $450</option>
                <option value='500'>E-REAR $500 </option>
              </select>
            </div>

            <button type='submit' className='btn btn-primary w-100'>
              Confirm
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;