import "../css/amazingTours.css";
import rwanda from "../images/Rwanda.jpg";
import canada from "../images/Canada.jpg";
import franch from "../images/Franch.jpg";
import { AiFillClockCircle } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AmezingTours = () => {
  return (
    <div className="amezingTours_container">
      <div className="amezingTour_content">
        <div className="amazingTour_title">
          <div className="amazingTourMain_title">
            <h1 className="amaziTour_title">Amazing Tours</h1>
            <h3 className="SubAmaziTour_title">
              Trending, <strong>Best Selling Tours</strong> And Fun Destinations
            </h3>
          </div>
          <div className="next_prev_buttons">
            <button className="previous">Prev</button>
            <button className="nextOffer">Next</button>
          </div>
        </div>
        <div className="AmazingTourContainer">
          <div className="Amazing_Tour">
            <div className="AmazingTourImages">
              <img src={rwanda} alt="" className="BookingImage_one" />
            </div>
            <div className="AmazingTourLocation">
              <div className="countryName">
                <h1>RWANDA</h1>
              </div>
              <div className="tourCOntent">
                <h4>
                  Holiday Planners is a World Leading Online Tour Booking
                  Platform
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia...
                </p>
              </div>
              <div className="durationsAndGrpSize">
                <div className="durations">
                  <AiFillClockCircle className="tourIcon1" />
                  <div className="days">
                    <h3>Duration</h3>
                    <p>6 days</p>
                  </div>
                </div>
                <div className="GrpSize">
                  <BsPeopleFill className="tourIcon1" />
                  <div className="days">
                    <h3>Group Size</h3>
                    <p>30 people</p>
                  </div>
                </div>
              </div>
              <div className="TotaleAmount">
                <h2>$10 000</h2>
                <Link to="/toulDetails">
                  <button className="bookingBtn">BOOK NOW</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="Amazing_Tour tourToRemove">
            <div className="AmazingTourImages">
              <img src={canada} alt="" className="BookingImage_one" />
            </div>
            <div className="AmazingTourLocation">
              <div className="countryName">
                <h1>CANADA</h1>
              </div>
              <div className="tourCOntent">
                <h4>
                  Holiday Planners is a World Leading Online Tour Booking
                  Platform
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia...
                </p>
              </div>
              <div className="durationsAndGrpSize">
                <div className="durations">
                  <AiFillClockCircle className="tourIcon1" />
                  <div className="days">
                    <h3>Duration</h3>
                    <p>1 month</p>
                  </div>
                </div>
                <div className="GrpSize">
                  <BsPeopleFill className="tourIcon1" />
                  <div className="days">
                    <h3>Group Size</h3>
                    <p>11 people</p>
                  </div>
                </div>
              </div>
              <div className="TotaleAmount">
                <h2>$1 100</h2>
                <Link to="/toulDetails">
                  <button className="bookingBtn">BOOK NOW</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="Amazing_Tour tourToRemove">
            <div className="AmazingTourImages">
              <img src={franch} alt="" className="BookingImage_one" />
            </div>
            <div className="AmazingTourLocation">
              <div className="countryName">
                <h1>FRENCH</h1>
              </div>
              <div className="tourCOntent">
                <h4>
                  Holiday Planners is a World Leading Online Tour Booking
                  Platform
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia...
                </p>
              </div>
              <div className="durationsAndGrpSize">
                <div className="durations">
                  <AiFillClockCircle className="tourIcon1" />
                  <div className="days">
                    <h3>Duration</h3>
                    <p>5 days</p>
                  </div>
                </div>
                <div className="GrpSize">
                  <BsPeopleFill className="tourIcon1" />
                  <div className="days">
                    <h3>Group Size</h3>
                    <p>7 people</p>
                  </div>
                </div>
              </div>
              <div className="TotaleAmount">
                <h2>$5 001</h2>
                <Link to="/toulDetails">
                  <button className="bookingBtn">BOOK NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nextAndPreTour">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
    </div>
  );
};

export default AmezingTours;
