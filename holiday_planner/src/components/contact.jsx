import "../css/contact.css";
import contact from "../images/contactUs.jpg";
import { MdLocationPin, MdOutlineAlternateEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contactUs_content">
      <div className="contactUs_background">
        <div className="contactUs_image_">
          <img
            src={contact}
            className="contactUsImage"
            alt="contact us image"
          />
          <h1 className="ContactUs_word">Contact Us</h1>
        </div>
      </div>
      <div className="mainContactUs">
        <div className="cotactUs_form">
          <div className="sideform">
            <form action="#" className="OriginalForm">
              <div className="fullNameAndEmail">
                <input
                  placeholder="Full Name*"
                  type="text"
                  name="FullName"
                  id="input"
                />
                <input
                  placeholder="Email*"
                  type="email"
                  name="email"
                  id="input"
                />
              </div>
              <div className="PhoneAndServises">
                <input
                  placeholder="Phone*"
                  type="text"
                  name="phone"
                  id="input"
                />
                <input
                  placeholder="Services*"
                  type="text"
                  name="services"
                  id="input"
                />
              </div>
              <input
                placeholder="Message"
                type="text"
                name="message"
                id="messages"
              />
              <button className="submitMessage">SUBMIT</button>
            </form>
          </div>
          <div className="whybookingTourAndQuestions">
            <div className="contactusWhyBooking">
              <h1 className="contactusWhyTitle">WHY BOOK WITH US?</h1>
              <ul>
                <li>Best Price Guarantee</li>
                <li>Customer care available 24/7</li>
                <li>Free Travel Insureance</li>
                <li>Hand-picked Tours & Activities</li>
              </ul>
            </div>
            <div className="ContactUsquestios">
              <h1 className="ContactUsQstTitle">GET A QUESTION?</h1>
              <p>
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you.
              </p>
              <h5>holidayplanners@gmail.com</h5>
              <h5>+123 456 789</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="OfficesAndMap">
        <div className="OfficesAndAddresses">
          <div className="child">
            <div className="indiaOffice">
              <h1 className="IndiaTitle">INDIA OFFICE</h1>
              <div className="addresses_container">
                <div className="indiaAddress">
                  <button className="sendAddress"><MdLocationPin className="contactIcon"/></button>
                  <h5>54, Beside Shoping Mall, Gujarat.</h5>
                </div>
                <div className="indiaAddress">
                  <button className="sendAddress"><BsTelephoneFill className="contactIcon"/></button>
                  <h5>+123 456 7890</h5>
                </div>
                <div className="indiaAddress">
                  <button className="sendAddress"><MdOutlineAlternateEmail className="contactIcon"/></button>
                  <h5>holidayplannersusa@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="child">
            <div className="indiaOffice">
              <h1 className="IndiaTitle">USA OFFICE</h1>
              <div className="addresses_container">
                <div className="indiaAddress">
                  <button className="sendAddress"><MdLocationPin className="contactIcon"/></button>
                  <h5>888 S Greenville, TX 75081, United States.</h5>
                </div>
                <div className="indiaAddress">
                  <button className="sendAddress"><BsTelephoneFill className="contactIcon"/></button>
                  <h5>+123 456 7890</h5>
                </div>
                <div className="indiaAddress">
                  <button className="sendAddress"><MdOutlineAlternateEmail className="contactIcon"/></button>
                  <h5>holidayplannersusa@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="child">
            <div className="indiaOffice">
              <h1 className="IndiaTitle">VICTORIA OFFICE</h1>
              <div className="addresses_container">
                <div className="indiaAddress">
                  <button className="sendAddress"><MdLocationPin className="contactIcon"/></button>
                  <h5>Main Street, Victoria 8007.</h5>
                </div>
                <div className="indiaAddress">
                  <button className="sendAddress"><BsTelephoneFill className="contactIcon"/></button>
                  <h5>+123 456 7890</h5>
                </div>
                <div className="indiaAddress">
                  <button className="sendAddress"><MdOutlineAlternateEmail className="contactIcon"/></button>
                  <h5>holidayplannersusa@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.532726323092!2d30.088148375272187!3d-1.939462336689464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1697521920127!5m2!1sen!2srw"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            className="ContactUsMap"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
