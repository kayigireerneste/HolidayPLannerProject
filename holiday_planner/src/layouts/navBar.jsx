import "../css/navBar.css";
import { AiOutlineMail } from 'react-icons/ai';
import { ImPhone, ImSearch } from 'react-icons/im';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaXTwitter} from 'react-icons/fa6';
import logo from "../images/logo.png";
import NavModal from "../modals/navBarModal";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';


   




const NavBar = () => {
     //to open and close invoice form
     const [modal, setModal] = useState(false);

     const handleOpen = () => {
         setModal(true);
       }
     
       const handleClose = () => {
         setModal(false);
       }

  return (
    <div className="navBar_content">
        {modal && (
        <div className="navBarModel">
            <div className="navBar_main">
            <NavModal/>
            </div>
            <div className="backbuton">
                <AiOutlineClose  onClick={handleClose} className="close_icon"/>
            </div>
        </div>
        )}
        <div className="sub_nav-bar">
            <div className="email_phone">
                <div className="email">
                    <AiOutlineMail className="email_icon"/>
                    <h3>holidayplanners@gmail.com</h3>
                </div>
                <div className="phone">
                    <ImPhone className="phone_icon"/>
                    <h3>+123 456 789</h3>
                </div>
            </div>
            <div className="social_medias">
                <div className="face">
                    <FaFacebookF className="_icon"/>
                </div>
                <div className="inst">
                    <FaInstagram className="_icon"/>
                </div>
                <div className="x">
                    <FaXTwitter className="_icon"/>
                </div>
            </div>
        </div>
        <div className="main_nav-bar">
            <img src={logo} alt="logo image" className="logo" />
            <div className="search_bager">
                <button className="reserver_btn">RESERVE</button>
                <button className="search_btn">
                    <ImSearch className="search_icon"/>
                </button>
                <button className="menu_btn">
                    <BiMenuAltRight onClick={handleOpen} className="menu_icon"/>
                </button>
            </div>
        </div>
    </div>
  );
};

export default NavBar;
