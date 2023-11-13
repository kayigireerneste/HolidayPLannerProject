import "../DashboardCSS/DashboardHome.css"
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";


function Settings() {
  return (
    <div className="Settings">
        <div className="logout">
            <Link to="/Login">
                <BiLogOut/>
            </Link>
            <label htmlFor="LogOut">LOGOUT</label>
        </div>
    </div>
  )
}

export default Settings
