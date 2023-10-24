import "../css/about.css";
import image_1 from "../images/image_1.jpg";
import image_2 from "../images/image_2.jpg";

const About = () => {
  return (
    <div className="about_content">
      <div className="two_images">
        <div className="image_1">
        <img className="first_image" src={image_2} alt="second image" />
        </div>
        <div className="image_2">
          <img className="second_image" src={image_1} alt="image one" />
        </div>
      </div>
      <div className="main_about">
        <h1 className="about_title">About Us</h1>
        <h4 className="about_sub_title">Plan Your <strong>Trip</strong> with <strong>Us</strong></h4>
        <p className="about_descrebtion">
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
        <button className="about_btn">READ MORE</button>
      </div>
    </div>
  );
};

export default About;
