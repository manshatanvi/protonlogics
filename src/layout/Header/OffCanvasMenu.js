import React from 'react';
import { Link } from 'react-router-dom';

const OffCanvasMenu = () => {
  return (
    <>
      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='offcanvasWithBackdrop'
      >
        <div className='offcanvas-header d-flex align-items-center mt-4'>
          <Link
            to='/'
            className='d-flex align-items-center mb-md-0 text-decoration-none'
          >
            <img
              src='assets/img/logoText-Dark.svg'
              alt='logo'
              className='img-fluid ps-2'
            />
          </Link>
          <button
            type='button'
            className='close-btn text-danger'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          >
            <i className='far fa-close'></i>
          </button>
        </div>
        <div className='offcanvas-body'>
          <ul className='nav col-12 col-md-auto justify-content-center main-menu'>
            <li>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/services' className='nav-link'>
                Services
              </Link>
            </li>
            <li>
              <Link to='/about-us' className='nav-link'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/contact-us' className='nav-link'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
