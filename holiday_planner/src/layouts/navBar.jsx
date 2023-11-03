import "../css/navBar.css";
import { AiOutlineMail } from "react-icons/ai";
import { ImPhone, ImSearch } from "react-icons/im";
import { BiMenuAltRight } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../images/logo.png";
import modalLogo from "../images/white-logo.png";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  //to open and close form
  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  //active element on the navBar
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (a) => {
    setActiveLink(a);
  };

  const handleAllLinksClick = () => {
    
    handleLinkClick();
    handleClose();
  };

  return (
    <div className="navBar_content">
      {modal && (
        <div className="navBarModel">
          <div className="navBar_main">
            <div className="model_content">
              <img src={modalLogo} alt="" className="modalLogo" />
              <nav className="main_NavBar">
                <ul>
                  <li>
                    <Link
                      className={
                        activeLink === "Home" ? "active-link" : "links"
                      }
                      to="/"
                      onClick={() => handleAllLinksClick("Home")}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        activeLink === "About" ? "active-link" : "links"
                      }
                      to="/about"
                      onClick={() => handleAllLinksClick("About")}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        activeLink === "Tours" ? "active-link" : "links"
                      }
                      to="/tours"
                      onClick={() => handleAllLinksClick("Tours")}
                    >
                      Tours
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        activeLink === "toulDetails" ? "active-link" : "links"
                      }
                      to="/toulDetails"
                      onClick={() => handleAllLinksClick("ToulDetails")}
                    >
                      Tour Detail
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        activeLink === "Contact Us" ? "active-link" : "links"
                      }
                      to="/contact"
                      onClick={() => handleAllLinksClick("Contact Us")}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        activeLink === "Login" ? "active-link" : "links"
                      }
                      to="/login"
                      onClick={() => handleAllLinksClick("Login")}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="backbuton">
            <AiOutlineClose onClick={handleClose} className="close_icon" />
            <div className="modal_icons">
              <FaFacebookF className="_icons" />
              <FaInstagram className="_icons" />
              <FaXTwitter className="_icons" />
            </div>
          </div>
        </div>
      )}
      <div className="sub_nav-bar">
        <div className="email_phone">
          <div className="email">
            <AiOutlineMail className="email_icon" />
            <h3>holidayplanners@gmail.com</h3>
          </div>
          <div className="phone">
            <ImPhone className="phone_icon" />
            <h3>+123 456 789</h3>
          </div>
        </div>
        <div className="social_medias">
          <div className="face">
            <FaFacebookF className="_icon" />
          </div>
          <div className="inst">
            <FaInstagram className="_icon" />
          </div>
          <div className="x">
            <FaXTwitter className="_icon" />
          </div>
        </div>
      </div>
      <div className="main_nav-bar">
        <img src={logo} alt="logo image" className="logo" />
        <div className="search_bager">
          <Link to="/login">
          <button className="reserver_btn">RESERVE</button>
          </Link>
          <button className="search_btn">
            <ImSearch className="search_icon" />
          </button>
          <button className="menu_btn">
            <BiMenuAltRight onClick={handleOpen} className="menu_icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
