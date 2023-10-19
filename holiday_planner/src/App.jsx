import "./App.css";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./layouts/navBar";
import Footer from "./layouts/footer";
import Error from "./components/Error";

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
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
