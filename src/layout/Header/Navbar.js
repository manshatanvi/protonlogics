import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffCanvasMenu from "./OffCanvasMenu";
import { Image } from "../../components/image/image";

const Navbar = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      <header
        className={`main-header ${navDark ? "position-absolute" : ""} w-100 `}
      >
        <nav
          className={`navbar navbar-expand-xl ${
            navDark ? "navbar-dark" : "navbar-light"
          } sticky-header ${scroll > headerTop ? "affix" : ""}`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <Link
              to={"/home"}
              className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <Image
                src="assets/img/logoText-Light.svg"
                alt="logo"
                className="img-fluid logo-white"
              />
              <Image
                src="assets/img/logoText-Dark.svg"
                alt="logo"
                className="img-fluid logo-color"
              />
            </Link>

            {/* <Link
              className='navbar-toggler position-absolute right-0 border-0'
              // to={'#offcanvasWithBackdrop'}
              role='button'
            >
              <span
                className='far fa-bars'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasWithBackdrop'
                aria-controls='offcanvasWithBackdrop'
              ></span>
            </Link> */}
            <button style={{background: "none", outline: "none", border: "none", cursor: "pointer"}} className="navbar-toggler position-absolute right-0 border-0">
              <span
                className="far fa-bars"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              ></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li className="nav-item dropdown">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/services"} className="nav-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={"/about-us"} className="nav-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={"/contact-us"} className="nav-link">
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
