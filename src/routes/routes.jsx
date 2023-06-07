import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main';
import ErrorPage from '../component/ErrorPage/ErrorPage';
import Home from '../component/Home/Home/Home';
import MoreInfo from '../component/MoreInfo/MoreInfo';
import BookingForm from '../component/BookingForm/BookingForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/more-info/:id',
        element: <MoreInfo/>
      },
      {
        path: '/booking/:id',
        element: <BookingForm/>
      }
    ],
  },
]);
export default router;