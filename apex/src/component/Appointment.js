import React from 'react';
import Menu from './Menu';
import Appointform from './Appointform';
import Footer from './Footer';
import Header from './Header';
export default function Appointment() {
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
          Appointment
        </h1>
        
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
    
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"
      ><i className="bi bi-arrow-up"></i
    ></a>


  </body>


   </>
  )
}
