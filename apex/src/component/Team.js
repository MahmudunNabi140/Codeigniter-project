import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

export default function Team() {
  const[team,setTeam]=useState([])
 useEffect(()=>{
  fetch("http://localhost/Reactjs/api_apex/team.php")
  .then((response)=>response.json())
  .then((data)=>setTeam(data))
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
        <h1 className="display-4 text-white animated slideInDown mb-4">Our Team</h1>
        
      </div>
    </div>
    
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2">Our Team</h6>
              <h1 className="display-6 mb-0">Our Expert Worker</h1>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
          </div>
        </div>
        <div className="row g-4">
          {team.map((d,i)=>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={i}>
            <div className="team-item position-relative">
            <img className="img-fluid" src={`http://localhost/Web_daynamic/apex/assets/image/${d.photo}`} alt="" />
              <div className="team-text bg-white p-4">
                <h5>{d.name}</h5>
                <span>{d.title}</span>
              </div>
            </div>
          </div>
        )}
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
