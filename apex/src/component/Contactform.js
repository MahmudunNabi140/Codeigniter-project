import React, { useState } from 'react';
import axios from 'axios';
export default function Contactform() {
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
    <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0 bg-light"
                      id="name" name="name"  onChange={(e)=>{setName(e.target.value)}} value={name}
                      placeholder="Your Name"
                    />
                    <label for="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control border-0 bg-light"
                      id="email" name='email' onChange={(e)=>{setEmail(e.target.value)}} value={email}
                      placeholder="Your Email"
                    />
                    <label for="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0 bg-light"
                      id="subject" name="subject" onChange={(e)=>{setSubject(e.target
                        .value)}} value={subject}

                      placeholder="Subject"
                    />
                    <label for="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control border-0 bg-light"
                      placeholder="Leave a message here"
                      id="message" name='msg' onChange={(e)=>{setMsg(e.target.value)}} value={msg}
                      style={{height: "150px"}}
                    ></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary py-3 px-5" type="submit" onClick={commit}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
    </>
  )
}
