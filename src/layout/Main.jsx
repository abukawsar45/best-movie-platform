import { Outlet } from "react-router-dom";

import Navbar from "../component/Shared/Navbar";
import Footer from "../component/Shared/Footer";

const Main = () => {
  return (
    //  <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
    <div className='container mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;