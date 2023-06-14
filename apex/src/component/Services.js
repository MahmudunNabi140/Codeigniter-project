import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Menu from './Menu';
import Appointform from './Appointform';

export default function Services() {
  const[services,setServices]=useState([])
  useEffect(()=>{
    fetch("http://localhost/Reactjs/api_apex/service.php")
    .then((response)=>response.json())
    .then((data)=>setServices(data))
  });
  return (
    <>
  <body>
    <div className="container-fluid bg-light p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div
            className="h-100 d-inline-flex align-items-center border-start border-end px-3"
          >
            <small className="fa fa-phone-alt me-2"></small>
            <small>+012 345 6789</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center border-end px-3">
            <small className="far fa-envelope-open me-2"></small>
            <small>info@example.com</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center border-end px-3">
            <small className="far fa-clock me-2"></small>
            <small>Mon - Fri : 09 AM - 09 PM</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-square border-end border-start" href="#"
              ><i className="fab fa-facebook-f"></i
            ></a>
            <a className="btn btn-square border-end" href="#"
              ><i className="fab fa-twitter"></i
            ></a>
            <a className="btn btn-square border-end" href="#"
              ><i className="fab fa-linkedin-in"></i
            ></a>
            <a className="btn btn-square border-end" href="#"
              ><i className="fab fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    
    <Menu/>
    
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 text-white animated slideInDown mb-4">
          Our Services
        </h1>
      
      </div>
    </div>
   
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2">Our Services</h6>
              <h1 className="display-6 mb-0">
                Construction And Renovation Solutions
              </h1>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end wow fadeInUp" data-wow-delay="0.3s">
            <a className="btn btn-primary py-3 px-5" href="#">More Services</a>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {services.map((d,i)=>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img className="img-fluid" src="img/service-1.jpg" alt="" />
              <div className="service-text position-relative text-center h-100 p-4">
                <h5 className="mb-3">Building Construction</h5>
                <p>
                  Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                  amet diam et eos
                </p>
                <a className="small" href="#"
                  >READ MORE<i className="fa fa-arrow-right ms-3"></i
                ></a>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
   
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">Appointment</h6>
              <h1 className="display-6 mb-0">
                A Company Involved In Service And Maintenance
              </h1>
            </div>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
          </div>
          <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <Appointform/>
          </div>
        </div>
      </div>
    </div>
 
    <Footer/>
 </body>



    </>
  )
}
