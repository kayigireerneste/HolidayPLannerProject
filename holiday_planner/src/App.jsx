import "./App.css";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./layouts/navBar";
import Footer from "./layouts/footer";
import Error from "./components/Error";
import About from "./components/about";

function App() {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <div className="mainApp">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
