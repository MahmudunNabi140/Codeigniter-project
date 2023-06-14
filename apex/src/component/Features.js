import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

export default function Features() {
  const[chooseus,setChooseus]=useState([])
  useEffect(()=>{
    fetch('http://localhost/Reactjs/api_apex/choose.php')
    .then((response)=>response.json())
    .then((data)=>setChooseus(data))
  });
  return (
    <>


  <body>
  
   

   <Header/>
   
  <Menu/>
  
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 text-white animated slideInDown mb-4">Features</h1>
        
      </div>
    </div>
 
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">Why Choose Us!</h6>
              <h1 className="display-6 mb-0">
                Our Specialization And Company Features
              </h1>
            </div>
            <p className="mb-5">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="row gy-5 gx-4">
              {chooseus.map((d,i)=>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s" key={i}>
                <div className="d-flex align-items-center mb-3">
                  <i
                    className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                  ></i>
                  <h6 className="mb-0">{d.title}</h6>
                </div>
                <span
                  >{d.details}</span
                >
              </div>
              )}
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="position-relative overflow-hidden ps-5 pt-5 h-100"
              style={{minHeight: "400px"}}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/feature.jpg"
                alt=""
                style={{objectFit: "cover"}}
              />
              <div
                className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                style={{width: "200px", height: "200px"}}
              >
                <div
                  className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3"
                >
                  <h1 className="text-white">25</h1>
                  <h2 className="text-white">Years</h2>
                  <h5 className="text-white mb-0">Experience</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">Testimonial</h6>
              <h1 className="display-6 mb-0">What Our Happy Clients Say!</h1>
            </div>
            <p className="mb-4">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
              dolore erat amet
            </p>
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-users fa-2x text-primary flex-shrink-0"></i>
                  <h1 className="ms-3 mb-0">123+</h1>
                </div>
                <h5 className="mb-0">Happy Clients</h5>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check fa-2x text-primary flex-shrink-0"></i>
                  <h1 className="ms-3 mb-0">123+</h1>
                </div>
                <h5 className="mb-0">Projects Done</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
           <Carousel/>
          </div>
        </div>
      </div>
    </div>
   
    <Footer/>
    </body>


    </>
  )
}
