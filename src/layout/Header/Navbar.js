import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OffCanvasMenu from './OffCanvasMenu';

const Navbar = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header
        className={`main-header ${navDark ? 'position-absolute' : ''} w-100 `}
      >
        <nav
          className={`navbar navbar-expand-xl ${
            navDark ? 'navbar-dark' : 'navbar-light'
          } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
        >
          <div className='container d-flex align-items-center justify-content-lg-between position-relative'>
            <Link
              to={process.env.PUBLIC_URL + '/'}
              className='navbar-brand d-flex align-items-center mb-md-0 text-decoration-none'
            >
              <img
                src='assets/img/logoText-Light.svg'
                alt='logo'
                className='img-fluid logo-white'
              />
              <img
                src='assets/img/logoText-Dark.svg'
                alt='logo'
                className='img-fluid logo-color'
              />
            </Link>

            <Link
              className='navbar-toggler position-absolute right-0 border-0'
              to={process.env.PUBLIC_URL + '#offcanvasWithBackdrop'}
              role='button'
            >
              <span
                className='far fa-bars'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasWithBackdrop'
                aria-controls='offcanvasWithBackdrop'
              ></span>
            </Link>

            <div className='collapse navbar-collapse justify-content-end'>
              <ul className='nav col-12 col-md-auto justify-content-center main-menu'>
                <li className='nav-item dropdown'>
                  <Link
                    to={process.env.PUBLIC_URL + '/'}
                    className='nav-link'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + '/services'}
                    className='nav-link'
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + '/about-us'}
                    className='nav-link'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + '/contact-us'}
                    className='nav-link'
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <OffCanvasMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
