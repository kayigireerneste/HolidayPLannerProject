import "../css/signUp.css";
import vectorImage from "../images/loginVector.avif";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const SignUp = () => {

 // signUp logics code
  const [fullNames, setfullNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  // function for sending data to the database
  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords Do NOT Match");
      return;
    }

    try {
      const response = await axios.post(
        "https://holiday-api-zj3a.onrender.com/api/v1/auth/signup",
        {
          fullNames,
          email,
          password,
        }
      );

      // messages for succession registrations
      console.log("User registered successfully", response.data);
      alert("user registred successfully!");
      // clear the input for next registration
      setfullNames("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      // message for failed registrations
      console.error("Error during registration", error);
      alert("There was ERRORS while registaring");
    }
  };

  return (
    <div className="signUp_Content">
      <div className="bottombackground"></div>
      <div className="signUp_main_contents">
        <div className="signUpForm_Container">
          <form onSubmit={handleSignupSubmit} className="signUpForm">
            <div className="SignUpTitle">
              <h1>SignUp</h1>
              <p>
              Already have an account?{" "}
                <Link to="/login" className="linkTologin">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="SignUpDatas_container">
            <input
                placeholder="Name or User Name"
                type="text"
                id="SignUpName"
                value={fullNames}
                onChange={(event) => setfullNames(event.target.value)}
              />
              <input
                placeholder="Email Address"
                type="email"
                id="SignUpemailAddress"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                placeholder="Type Password"
                type="password"
                id="signUpPassword"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <input
                placeholder="Re-type Password"
                type="password"
                id="Re-type_Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <button type="submit" className="SignUpBtn">REGISTER</button>
            <div className="AnotherSignUpOptions">
              <hr width="35%" size="2" />
              <h4>or Signup with</h4>
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
        <div className="SignUpImage_Container">
          <img
            src={vectorImage}
            alt="vector image for login page"
            className="SignUpImage"
          />
        </div>
      </div>
      <div className="bottombackground"></div>
    </div>
  );
};

export default SignUp;