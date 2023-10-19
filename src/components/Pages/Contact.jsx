import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contant">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            maxime a autem, quaerat perspiciatis dolor.
          </p>
        </div>
        <div className="co-container">
          <div className="contactinfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  129 Railway Road, <br /> Sarsawa Saharanpur, <br />
                  247232
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>782-006-0559</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <h3>E-mail</h3>
                <p>dushyant007p@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactfrom">
            <form>
              <h2>Send Message</h2>
              <div className="inputbox">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="inputbox">
                <input type="text" placeholder="Email" required />
              </div>
              <div className="inputbox">
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="2"
                  placeholder="Type Your message.."
                  required
                ></textarea>
              </div>
              <div className="inputbox">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
