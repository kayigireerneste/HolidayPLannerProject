import "../css/tours.css";
import my_image from "../images/my_image.jpg";
import rwanda from "../images/Rwanda.jpg";
import canada from "../images/Canada.jpg";
import franch from "../images/Franch.jpg";
import japan from "../images/Japan.jpg";
import lucia from "../images/Lucia.jpg";
import turkey from "../images/Turkey.jpg";
import { AiFillClockCircle } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Tours = () => {
  return (
    <div className="tours_contents">
      <div className="tou_background">
        <div className="tour_image_">
          <img src={my_image} className="tourImage" alt="" />
          <h1 className="tour_word">Tour List</h1>
        </div>
      </div>
      <div className="TourMain_content">
        <div className="bookingTour">
          <div className="sortby">
            <div className="sortDiv">
              <h4>Sort by :</h4>
            </div>
            <div className="sortByData">
              <select className="choose">
                <option value="releaseDate">Release Date</option>
                <option value="tourDate">Tour Date</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="duration">Duration</option>
              </select>
            </div>
            <div className="sortByincre">
              <select className="choose">
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>
          <div className="bookingContainer">
            <div className="booking">
              <div className="bookImages">
                <img src={rwanda} alt="" className="BookingImage_one" />
              </div>
              <div className="count">
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

            <div className="booking">
              <div className="bookImages">
                <img src={canada} alt="" className="BookingImage_one" />
              </div>
              <div className="count">
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

            <div className="booking">
              <div className="bookImages">
                <img src={franch} alt="" className="BookingImage_one" />
              </div>
              <div className="count">
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

            <div className="booking">
              <div className="bookImages">
                <img src={japan} alt="" className="BookingImage_one" />
              </div>
              <div className="count">
                <div className="countryName">
                  <h1>JAPAN</h1>
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
                      <p>1 days</p>
                    </div>
                  </div>
                  <div className="GrpSize">
                    <BsPeopleFill className="tourIcon1" />
                    <div className="days">
                      <h3>Group Size</h3>
                      <p>2 people</p>
                    </div>
                  </div>
                </div>
                <div className="TotaleAmount">
                  <h2>$3 100</h2>
                  <Link to="/toulDetails">
                    <button className="bookingBtn">BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="booking">
              <div className="bookImages">
                <img src={lucia} alt="" className="BookingImage_one" />
              </div>
              <div className="count">
                <div className="countryName">
                  <h1>LUCIA</h1>
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
                      <p>1month, 2days</p>
                    </div>
                  </div>
                  <div className="GrpSize">
                    <BsPeopleFill className="tourIcon1" />
                    <div className="days">
                      <h3>Group Size</h3>
                      <p>10 people</p>
                    </div>
                  </div>
                </div>
                <div className="TotaleAmount">
                  <h2>$2 210</h2>
                  <Link to="/toulDetails">
                    <button className="bookingBtn">BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="booking">
              <div className="bookImages">
                <img src={turkey} alt="" className="BookingImage_one" />
              </div>
              <div className="count">
                <div className="countryName">
                  <h1>TURKEY</h1>
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
                      <p>3 weeks</p>
                    </div>
                  </div>
                  <div className="GrpSize">
                    <BsPeopleFill className="tourIcon1" />
                    <div className="days">
                      <h3>Group Size</h3>
                      <p>14 people</p>
                    </div>
                  </div>
                </div>
                <div className="TotaleAmount">
                  <h2>$3 400</h2>
                  <Link to="/toulDetails">
                    <button className="bookingBtn">BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="nextButton">
            <button className="1">1</button>
            <button className="2">2</button>
            <button className="3">
              <IoIosArrowForward className="icon_in_button" />
            </button>
          </div>
        </div>
        <div className="findTours">
          <div className="Find_Your_Tour">
            <h1 className="tour_find_Title">FIND YOUR TOUR</h1>
            <form action="#" method="get" className="searchForm">
              <div className="searchInputs">
                <input placeholder="Search Tour" type="search" name="search" id="search" />
                <input placeholder="Where To?" type="place" name="place" id="search" />
                <input placeholder="month" type="month" name="month" id="search" />
              </div>
              <div className="timeDuration">
                <label htmlFor="Duration">Duration</label>
                <select className="durationChoice">
                  <option value="any">Any</option>
                  <option value="oneDay">1 Day Tour</option>
                  <option value="TwoToFourDays">2-4 Days Tour</option>
                  <option value="FiveToSevenDays">5-7 Days Tour</option>
                  <option value="AboveSeven">7+ Days Tour</option>
                </select>
              </div>
              <div className="TourPrices">
                <div className="MinPrices">
                  <label htmlFor="MinPrices">Min Price</label>
                  <input type="number" name="price" id="minPrices" />
                </div>
                <div className="maxPrices">
                  <label htmlFor="MaxPrices">Max Price</label>
                  <input type="number" name="maxPrices" id="maxPrices" />
                </div>
              </div>
              <div className="checkboxs">
                <div className="box">
                <input type="checkbox" name="Travel" id="Travel" />
                <label htmlFor="Travel">Travel</label>
                </div>
                    <div className="box">
                    <input type="checkbox" name="Cultural" id="Cultural"/>
                    <label htmlFor="Cultural">Cultural</label>
                    </div>
                    <div className="box">
                    <input type="checkbox" name="Advanture" id="Advanture" />
                    <label htmlFor="Advanture">Advanture</label>
                    </div>
                    <div className="box">
                    <input type="checkbox" name="Historical" id="Historical" />
                    <label htmlFor="Historical">Historical</label>
                    </div>
                    <div className="box">
                    <input type="checkbox" name="Seaside" id="Seaside" />
                    <label htmlFor="Seaside">Seaside</label>
                    </div>
                    <div className="box">
                    <input type="checkbox" name="Discovery" id="Discovery" />
                    <label htmlFor="Discovery">Discovery</label>
                    </div>   
                </div>
                <button className="searchTourButton">FIND NOW</button>
            </form>
          </div>
          <div className="whyBook">
            <h1 className="whyBookTitle">WHY BOOK WITH US?</h1>
            <ul>
                <li>Best Price Guarantee</li>
                <li>Customer care available 24/7</li>
                <li>Free Travel Insureance</li>
                <li>Hand-picked Tours & Activities</li>
            </ul>
          </div>
          <div className="haveQst">
            <h1 className="QstTitle">GET A QUESTION?</h1>
            <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
            <h5>holidayplanners@gmail.com</h5>
            <h5>+123 456 789</h5>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Tours;
