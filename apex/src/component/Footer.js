import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  const [genarel, setGenarel] = useState([])
  useEffect(() => {
    fetch('http://localhost/Reactjs/api_apex/general.php')
      .then((response) => response.json())
      .then((data) => setGenarel(data))
  });
  return (

    <>
      <div
        className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h1 className="text-white mb-4">
                <i className="fa fa-building text-primary me-3"></i>APEX
              </h1>
              <p>
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-primary me-1" href="#"
                ><i className="fab fa-twitter"></i
                ></a>
                <a className="btn btn-square btn-outline-primary me-1" href="#"
                ><i className="fab fa-facebook-f"></i
                ></a>
                <a className="btn btn-square btn-outline-primary me-1" href="#"
                ><i className="fab fa-youtube"></i
                ></a>
                <a className="btn btn-square btn-outline-primary me-0" href="#"
                ><i className="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
            {genarel.map((d,i)=>
            <div className="col-lg-3 col-md-6" key={i}>
              <h4 className="text-light mb-4">Address</h4>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>{d.address}
              </p>
              <p><i className="fa fa-phone-alt me-3"></i>{d.phone}</p>
              <p><i className="fa fa-envelope me-3"></i>{d.email}</p>
            </div>
            )}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <NavLink to="/aboutus" className="btn btn-link">About Us</NavLink>
              <NavLink to="/contact" className="btn btn-link">Contact Us</NavLink>
              <NavLink to="/services" className="btn btn-link">Our Services</NavLink>
              <NavLink to="/" className="btn btn-link">Terms & Condition</NavLink>
              <NavLink to="/" className="btn btn-link">Support</NavLink>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2  top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a href="#">Your Site Name</a>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/* *** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** */}
                Designed By <a href="https://htmlcodex.com/">HTML Codex</a>
                <br />Distributed By:
                <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"
      ><i className="bi bi-arrow-up"></i
      ></a>
    </>
  )
}
