import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h5>Follow Us</h5>
            <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
              <FaFacebook className='cursor-pointer h-6 q-6 text-teal-400' />{' '}
              <FaTwitter className='cursor-pointer h-6 q-6 text-cyan-500' />{' '}
              <FaGithub className='cursor-pointer h-6 q-6 text-slate-950' />{' '}
              <FaInstagram className='cursor-pointer h-6 q-6 text-red-500' />
            </div>
          </div>
          <div className='col-md-6'>
            <h5>Contact Us</h5>
            <ul className='list-unstyled'>
              <li>Address: 123 Street, City</li>
              <li>Phone: 123-456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
