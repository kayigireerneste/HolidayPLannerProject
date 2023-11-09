import "../DashboardCSS/DashboardNavBar.css";
import dashLogo from "../images/logo.png";
import { Link } from "react-router-dom";
import usersImages from "../images/usersImages.png";
import { AiFillDashboard, AiOutlineLogout } from "react-icons/ai";
import { FaUmbrellaBeach } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { FaUsersLine } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const DashboardNavBar = () => {
  return (
    <div className="Nav_Container">
      <div className="header_container">
        <div className="DashNavLogo">
          <img src={dashLogo} alt="dashboard logo image" />
        </div>
        <h1 className="dashHead">MAIN MENU</h1>
        <div className="dashNav">
          <ul>
            <li>
              <span>
                <AiFillDashboard className="dashNavIcon" />
                <NavLink
                  className="dashLink"
                  activeClassName="active"
                  exact
                  to="/Dashboard"
                >
                  Dashboard
                </NavLink>
              </span>
              <IoIosArrowForward color="#C29D59" />
            </li>
            <li>
              <span>
                <FaUmbrellaBeach className="dashNavIcon" />
                <NavLink
                  className="dashLink"
                  activeClassName="active"
                  to="/Dashboard/DashboardTours"
                >
                  Tours
                </NavLink>
              </span>
              <IoIosArrowForward color="#C29D59" />
            </li>
            <li>
              <span>
                <ImAddressBook className="dashNavIcon" />
                <NavLink
                  className="dashLink"
                  activeClassName="active"
                  to="/Dashboard/DashboardBookings"
                >
                  Bookings
                </NavLink>
              </span>
              <IoIosArrowForward color="#C29D59" />
            </li>
            <li>
              <span>
                <FaUsersLine className="dashNavIcon" />
                <NavLink
                  className="dashLink"
                  activeClassName="active"
                  to="/Dashboard/DashboardUsers"
                >
                  Users
                </NavLink>
              </span>
              <IoIosArrowForward color="#C29D59" />
            </li>
          </ul>
        </div>
      </div>
      <div className="profileIMages">
        <input type="image" src={usersImages} alt="userImages" />
        <Link to="/login">
        <AiOutlineLogout className="LogOut"/>
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavBar;
