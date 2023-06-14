import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState } from 'react'
export default function Car() {
  const [car, setCar] = useState([])
  useEffect(() => {
    fetch("http://localhost/Reactjs/api_apex/testimonial.php")
      .then((response) => response.json())
      .then((data) => setCar(data))
  })
  return (
    <>
      <OwlCarousel
        items={1}
        loop={true}
        nav={true}
        dots={false}
        autoplay={true}
        className="owl-carousel testimonial-carousel">
          {car.map((d,i)=>
        <div className="testimonial-item" key={i}>
          <img
            style={{ width: "60px", height: "50px" }}
            className="img-fluid mb-4"
            src={`http://localhost/Web_daynamic/apex/assets/image/${d.photo}`} 
            alt=""
          />
          <p className="fs-5">
            {d.details}
          </p>
          <div
            className="bg-primary mb-3"
            style={{ width: "60px", height: "5px" }}
          ></div>
          <h5>{d.name}</h5>
          <span>{d.designation}</span>
        </div>
      )}
      </OwlCarousel>
    </>
  )
}
