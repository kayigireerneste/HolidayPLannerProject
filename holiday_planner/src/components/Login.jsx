import "../css/Login.css";
import vectorImage from "../images/loginVector.avif";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  //login logic function
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    try {
      const response = await fetch(
        "https://holiday-api-zj3a.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {

        //direct to Dashboard
        alert("login successfully");
        const data = await response.json();
        const { access_token } = data;
        console.log(data);
         localStorage.setItem("access_token", access_token);
        if (data.user.role == "admin") {
          navigate("/Dashboard");
        } else {
          navigate("/");
        }
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
    }
  };

  // rememberme on another login
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };


  return (
    <div className="container_of_all">
      <div className="bottombackground"></div>
      <div className="login_contents">
        <div className="loginForm_Container">
          <form onSubmit={handleLoginSubmit} className="LoginForm">
            <div className="loginTitle">
              <h1>Login</h1>
              <p>
                Doesn`t have an account yet?{"           "}
                <Link to="/signUp" className="linkToSignUp">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="LoginEmail">
              <label htmlFor="LoginEmailLbel">Email Address</label>
              <input
                placeholder="you@example.com"
                type="email"
                id="emailAddress"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="LoginPassword">
              <div>
                <label htmlFor="password">Password</label>
                <a href="#">Forget Password?</a>
              </div>
              <input
                placeholder="Enter Your Password"
                type="password"
                name="password"
                id="LoginPassword"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="remember_me">
              <input 
              type="checkbox"
              id="rememberMe" 
              checked={rememberMe}
              onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <button type="submit" className="LoginBtn">LOGIN</button>
            <div className="AnotherOption">
              <hr width="35%" size="2" />
              <h4>or login with</h4>
              <hr width="35%" size="2" />
            </div>
            <div className="googleAndFb">
              <button className="google">
                <FcGoogle className="googleIcon" />
                <h4>Google</h4>
              </button>
              <button className="Fb">
                <ImFacebook className="facebookicon" />
                <h4>Facebook</h4>
              </button>
            </div>
          </form>
        </div>
        <div className="loginImage_Container">
          <img
            src={vectorImage}
            alt="vector image for login page"
            className="LoginImage"
          />
        </div>
      </div>
      <div className="bottombackground"></div>
    </div>
  );
};

export default Login;
