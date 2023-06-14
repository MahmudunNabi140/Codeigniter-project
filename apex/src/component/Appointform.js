import React, { useState } from 'react';
import axios from 'axios';
import Services from './Services';

export default function Appointform() {
  const [msg, setMsg] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [phone, setPhone] = useState('');
  console.log(msg, name, email, service, phone);
  const commit = () => {
    axios({
      method: 'post',
      url: 'http://localhost/Reactjs/api_apex/appointment.php',
      data: {
        msg: msg,
        name: name,
        email: email,
        service: service,
        phone: phone,
      }

    })
      .then(function (response) {
        setMsg('');
        setName('');
        setEmail('');
        setService('');
        setPhone('');
      })
  }
  return (
    <>
      <form>
        <div className="row g-3">
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control bg-light border-0"
                id="gname"onChange={(e) => { setName(e.target.value) }} value={name}
                placeholder="Gurdian Name"
              />
              <label for="gname">Your Name</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control bg-light border-0"
                id="gmail"
                onChange={(e) => { setEmail(e.target.value) }} value={email}
                placeholder="Gurdian Email"
              />
              <label for="gmail">Your Email</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control bg-light border-0"
                id="cname"
                onChange={(e) => { setPhone(e.target.value) }} value={phone}
                placeholder="Child Name"
              />
              <label for="cname">Your Mobile</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control bg-light border-0"
                id="cage" onChange={(e) => { setService(e.target.value) }} value={service}
                placeholder="Child Age"
              />
              <label for="cage">Service Type</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control bg-light border-0"
                placeholder="Leave a message here"
                id="message" onChange={(e) => { setMsg(e.target.value) }} value={msg}
                style={{ height: "100px" }}
              ></textarea>
              <label for="" >Message</label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit" onClick={commit}>
              Get Appointment
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
