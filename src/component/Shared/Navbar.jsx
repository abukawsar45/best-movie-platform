import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { getCartData } from '../../utilities/localStorage';
import { useEffect, useState } from 'react';
import { BiMoviePlay } from 'react-icons/bi';


const Navbar = () => {
const [totalTicket, setTotalTicket] = useState(0);
const [totalMovie, setTotalMovie] = useState(0);

  const getData = getCartData();
  const totalMovieResult = Object.keys(getData).length;
// console.log(totalMovie,'------')
  const values = Object.values(getData);  
  // console.log(values,)

useEffect(() => {
  const calculateTotalTicket = async () => {
    const result = await values.reduce(
      (total, quantity) => total + parseFloat(quantity),
      0
    );
    setTotalTicket(result);
    setTotalMovie(totalMovieResult);
    console.log(result, '0099');
  };

  calculateTotalTicket();
}, [getData, totalMovie,values, totalMovieResult, totalTicket]);

console.log({totalTicket});

  
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand fs-2 font-monospace te' href='#'>
            Best Movie Platform
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav  mx-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-link active'
                  aria-current='page'
                  href='#'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link' href='#'>
                  Total Ticket {totalTicket}
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link' href='#'>
                  Movie <BiMoviePlay /> {totalMovie}
                </Link>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// <div>
//   <nav className='navbar navbar-expand-lg bg-light'>
//     <div className='container-fluid'>
//       <Link className='navbar-brand fs-2 font-monospace te' href='#'>
//         Best Movie Platform
//       </Link>
//       <button
//         className='navbar-toggler'
//         type='button'
//         data-bs-toggle='collapse'
//         data-bs-target='#navbarNavAltMarkup'
//         aria-controls='navbarNavAltMarkup'
//         aria-expanded='false'
//         aria-label='Toggle navigation'
//       >
//         <span className='navbar-toggler-icon'></span>
//       </button>
//       <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
//         <div className='navbar-nav'>
//           <a className='nav-link active' aria-current='page' href='#'>
//             Home
//           </a>
//           <a className='nav-link' href='#'>
//             Features
//           </a>
//           <a className='nav-link' href='#'>
//             Pricing
//           </a>
//           <a className='nav-link disabled'>Disabled</a>
//         </div>
//       </div>
//     </div>
//   </nav>
// </div>
