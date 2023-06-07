import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main';
import ErrorPage from '../component/ErrorPage/ErrorPage';
import Home from '../component/Home/Home/Home';
import MoreInfo from '../component/MoreInfo/MoreInfo';

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
        path: '/more-info',
        element: <MoreInfo/>
      },
    ],
  },
]);
export default router;