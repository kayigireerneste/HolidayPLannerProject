import "./App.css";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./layouts/navBar";
import Footer from "./layouts/footer";
import Error from "./components/Error";
import About from "./components/about";
import Tours from "./components/tours";
import Contact from "./components/contact";
import Login from "./components/Login";
import SignUp from "./components/signUp";
import ToulDetails from "./components/toulDetails";
import DashboardHome from "./Dashboard/DashboardHome";
import DashboardNavBar from "./Dashboard/DashboardNavBar";
import DashboardTours from "./Dashboard/DashboardTours";
import DashboardBookings from "./Dashboard/DashboardBookings";
import DashboardUsers from "./Dashboard/DashboardUsers";

function App() {
  const Layout = () => {
    return (
      <>
      <div className="mainAppjs">
        <div className="mainNavBarjs">
        <NavBar />
        </div>
        <div className="outletjs">
        <Outlet />
        </div>
        <div className="mainFooterjs">
        <Footer />
        </div>
        </div>
      </>
    );
  };

  const DashboardLayout = () => {
    return (
      <div className="dashboardjs">
        <div className="sideBarjs">
        <DashboardNavBar/>
        </div>
        <div className="Dashoutlet">
        <Outlet />
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="tours" element={<Tours/>} />
          <Route path="toulDetails" element={<ToulDetails/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signUp" element={<SignUp/>} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/Dashboard" element={<DashboardLayout/>}>
          <Route index element={<DashboardHome />} />
          <Route path="DashboardTours" element={<DashboardTours/>} />
          <Route path="DashboardBookings" element={<DashboardBookings/>} />
          <Route path="DashboardUsers" element={<DashboardUsers/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
