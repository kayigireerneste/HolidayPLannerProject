import "../css/signUp.css";
import vectorImage from "../images/loginVector.avif";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

 // signUp logics code
  const [fullName, setfullNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();


  // function for sending data to the database
  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      // alert("Passwords Do NOT Match");
      toast.error('Passwords Do NOT Match.');
      return;
    }
    else{
      toast.success("user registered successfully!");
    }

    try {
      const response = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
        {
          fullName,
          email,
          password,
        }
      );
      // messages for succession registrations
      console.log("User registered successfully", response.data);
      // alert("user registred successfully!");
      navigate("/login");
      // clear the input for next registration
      setfullNames("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      // message for failed registrations
      console.error("Error during registration", error);
      // alert("There was ERRORS while registaring");
      toast.error('Oops!! error occurred while registaring.');
    }
  };

  return (
    <div className="signUp_Content">
      <ToastContainer/>
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
                required
                value={fullName}
                onChange={(event) => setfullNames(event.target.value)}
              />
              <input
                placeholder="Email Address"
                type="email"
                id="SignUpemailAddress"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                placeholder="Type Password"
                type="password"
                id="signUpPassword"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <input
                placeholder="Re-type Password"
                type="password"
                id="Re-type_Password"
                value={confirmPassword}
                required
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
