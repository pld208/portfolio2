import React, {ReactElement} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import emailjs from 'emailjs-com';
//import {useForm} from 'react-hook-form';

const ContactMe = ():ReactElement => {

  //const { register, handleSubmit, errors } = useForm();
  const serviceID = 'service_ID';
  const templateID = 'template_ID';
  const userID = 'user_1QSsGDcsGV494HRwX2rNC';

  const sendEmail = (e):any => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <div id="contacts" className="contacts">
        <div className="text-center">
          <h1>Contact Me</h1>
          <p>Please fill out the form and I will contact you as soon as possible.</p>
        </div>
        <div className="container">
          <form onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                {/* NAME INPUT */}
                <div className="text-center">
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name" >

                  </input>
                  <div className="line"></div>
                </div>
                {/* PHONE INPUT */}
                <div className="text-center">
                  <input
                    id="phone"
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="name" >

                  </input>
                  <div className="line"></div>
                </div>
                {/* EMAIL INPUT */}
                <div className="text-center">
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email" >

                  </input>
                  <div className="line"></div>
                </div>
                {/* SUBJECT INPUT */}
                <div className="text-center">
                  <input
                    id="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject" >

                  </input>
                  <div className="line"></div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                {/* DESCRIPTION */}
                <div className="text-center">
                  <textarea
                    id="description"

                    className="form-control"
                    placeholder="Leave your message here..."
                    name="email" >

                  </textarea>
                  <div className="line"></div>
                </div>
                <button className="btn-contact2" type="submit">CONTACT ME</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
