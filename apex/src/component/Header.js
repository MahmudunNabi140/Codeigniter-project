import React, { useEffect, useState } from 'react'

export default function Header() {
  const[genarel,setGenarel]=useState([])
  useEffect(()=>{
    fetch('http://localhost/Reactjs/api_apex/general.php')
    .then((response)=>response.json())
    .then((data)=>setGenarel(data))
  });
  return (

    <>
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          {genarel.map((d,i)=>
          <div className="col-lg-7 px-5 text-start" key={i}>
            <div
              className="h-100 d-inline-flex align-items-center border-start border-end px-3"
            >
              <small className="fa fa-phone-alt me-2"></small>
              <small>{d.phone}</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center border-end px-3">
              <small className="far fa-envelope-open me-2"></small>
              <small>{d.email}</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center border-end px-3">
              <small className="far fa-clock me-2"></small>
              <small>Mon - Fri : 09 AM - 09 PM</small>
            </div>
          </div>
          )}
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
    </>
  )
}
