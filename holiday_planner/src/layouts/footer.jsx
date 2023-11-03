import "../css/footer.css";
import footerLogo from "../images/white-logo.png";
import paymentCompany from "../images/paymentCompany.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="footer_content">
      <div className="main_footer">
        <div className="footer_logo">
          <img className="footer_logo_img" src={footerLogo} alt="footer logo" />
          <p className="explaination">
            <strong>Holiday Planners</strong> sit amet consectetur adipisicing
            <br /> elit. Perferendis sapiente tenetur officiis explicabo <br />
            fugit, sit mollitia eum atque excepturi quaerat <br /> autem.
          </p>
          <span className="send_email">
            <input type="email" name="email" id="email" className="email" />
            <button className="submit_btn">SUBMIT</button>
          </span>
          <img
            className="payCampImg"
            src={paymentCompany}
            alt="payments companys image"
          />
        </div>
        <div className="navigater">
          <span className="nav_title">
          <h1>Navigation</h1>
          </span>
          <nav className="footer_navBar">
            <ul className="nav_list">
              <li>
                <Link to="/" className="link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="link">About</Link>
              </li>
              <li>
                <Link to="/login" className="link">Destination</Link>
              </li>
              <li>
                <Link to="/tours" className="link">Tour</Link>
              </li>
              <li>
                <Link to="signUp" className="link">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="link">Contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="help">
        <span className="help_title">
          <h1>Need Help ?</h1>
          </span>
          <div className="help_contact">
            <span className="contact">
              <h4>call us</h4>
              <a href="#">+123 456 789</a>
            </span>
            <span className="contact">
              <h4>Email for Us</h4>
              <a href="#">holidayplanners@gmail.com</a>
            </span>
            <span className="contact">
              <h4>Location</h4>
              <a href="#">Main Street, Victoria 8007.</a>
            </span>
            <span className="contact">
              <h4>Follow us</h4>
              <span className="icons">
                <a href="#"> <FaYoutube/> </a>
                <a href="#"> <FaFacebookF/> </a>
                <a href="#"> <FaInstagram/> </a>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="footer">
        <span className="copyright">
          Copyright © 2021 <a href="#"> Geek Code Lab </a>.  All Rights Reserved.
        </span>
        <span className="policy">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Cookie Policy</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
