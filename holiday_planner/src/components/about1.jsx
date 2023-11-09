import { Link } from "react-router-dom";
import "../css/about1.css";
import image_2 from "../images/image_1.jpg";
import image_1 from "../images/image_2.jpg";

const About1 = () => {
  return (
    <div className="about_content1">
      <div className="two_images1">
        <div className="image_11">
          <img className="first_image1" src={image_1} alt="second image" />
        </div>
        <div className="image_21">
          <img className="second_image1" src={image_2} alt="image one" />
        </div>
      </div>
      <div className="main_about1">
        <h1 className="about_title1">About Us</h1>
        <h4 className="about_sub_title1">Plan Your <strong>Trip</strong> with <strong>Us</strong></h4>
        <p className="about_descrebtion1">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic. Italic Mountains, she had a last view back
          on the skyline
        </p>
        <Link to="/about">
          <button className="about_btn1">READ MORE</button>
        </Link>
      </div>
    </div>
  );
};

export default About1;
