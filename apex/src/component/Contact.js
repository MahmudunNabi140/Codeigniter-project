import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Contactform from './Contactform';

export default function Contact() {
  const [msg, setMsg] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  console.log(msg, name, email, subject);
  const commit = () => {
    axios({
      method: 'post',
      url: 'http://localhost/Reactjs/api_apex/massage.php',
      data: {
        msg: msg,
        name: name,
        email: email,
        subject: subject,
      }

    })
      .then(function (response) {
        setMsg('');
        setName('');
        setEmail('');
        setSubject('');
      })
    }
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
          Contact Us
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
       
        </nav>
      </div>
    </div>
   
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4 align-items-center">
              <div className="col-sm-6">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
              </div>
              <div className="col-sm-6">
                <h3 className="mb-0">Full Name</h3>
                <p>Head of Sales</p>
                <h6>Contact Details</h6>
                <p>
                  Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.
                </p>
                <p className="mb-0">Call: +012 345 6789</p>
                <p className="mb-0">Email: sales@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4 align-items-center">
              <div className="col-sm-6">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
              </div>
              <div className="col-sm-6">
                <h3 className="mb-0">Full Name</h3>
                <p>Head of Marketing</p>
                <h6>Contact Details</h6>
                <p>
                  Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.
                </p>
                <p className="mb-0">Call: +012 345 6789</p>
                <p className="mb-0">Email: sales@example.com</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{minHight: "450px"}}
          >
            <div className="position-relative h-100">
              <iframe
                className="position-relative w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0"
                style={{minHeight: "450px", border: "0"}}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">Contact Us</h6>
              <h1 className="display-6 mb-0">
                If You Have Any Query, Please Contact Us
              </h1>
            </div>
            <p className="mb-4">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.
              <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>
            <Contactform/>
          </div>
        </div>
      </div>
    </div>
   
    <Footer/>

    </body>
</>
  )
}
