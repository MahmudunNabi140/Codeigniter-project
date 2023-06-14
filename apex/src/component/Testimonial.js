import React from 'react';
import Menu from './Menu';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
export default function Testimonial() {

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
        <h1 className="display-4 text-white animated slideInDown mb-4">
          Testimonial
        </h1>
        
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
    
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"
      ><i className="bi bi-arrow-up"></i
    ></a>

  
  </body>



   </>
  )
}
