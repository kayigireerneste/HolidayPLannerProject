import "../css/toulDetails.css";
import toulDetailsBackgrnd from "../images/ToulDetailsBackgrnd.jpg";
import { Link } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { BsBook } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import { FaUserFriends, FaSun } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";
import video from "../images/highlight-video.mp4";
import bird from "../images/bird.jpg";
import people from "../images/people.jpg";
import landscape from "../images/landscape.jpg";

const ToulDetails = () => {
  return (
    <div className="ToulDetails_container">
      <div className="toulDetails_content">
        <div className="tourDetail_background">
          <div className="tourDetail_image_">
            <img
              src={toulDetailsBackgrnd}
              className="tourDetail_image"
              alt=""
            />
            <h1 className="tourDetail_word">Italy</h1>
          </div>
        </div>
        <div className="ToulDetailMain_content">
          <div className="toulDetails_inDetail">
            <div className="tourDetailsNavBar">
              <div className="linkdetail_container">
                <HiInformationCircle className="icons_ icons_1" />
                <Link className="linktoDetail linktoDetail_1">Information</Link>
              </div>
              <div className="linkdetail_container">
                <BsBook className="icons_" />
                <Link className="linktoDetail">Tour Plan</Link>
              </div>
              <div className="linkdetail_container">
                <FaLocationDot className="icons_" />
                <Link className="linktoDetail">Location</Link>
              </div>
              <div className="linkdetail_container">
                <TfiGallery className="icons_" />
                <Link className="linktoDetail">Gallery</Link>
              </div>
              <div className="linkdetail_container">
                <FaUsers className="icons_" />
                <Link className="linktoDetail">Review</Link>
              </div>
            </div>
            <div className="informations_container">
              <div className="offerDegre_container">
                <div className="offerDegre">
                  <h5>
                    22% <br /> Offer
                  </h5>
                </div>
              </div>
              <div className="detailsOfDetail">
                <div className="headerTitle">
                  <h1>
                    A wonderful serenity has <br /> taken possession of my
                    entire <br /> soul
                  </h1>
                  <div className="amountcontainer">
                    <div className="div1">$2100</div>
                    <div className="div2">per person</div>
                  </div>
                </div>

                <div className="tourInformations">
                  <div className="Infos">
                    <BsFillClockFill className="InfoIcons" />
                    <h3>2 days</h3>
                  </div>
                  <div className="Infos">
                    <FaUserFriends className="InfoIcons" />
                    <h3>6 people</h3>
                  </div>
                  <div className="Infos">
                    <FaUserPlus className="InfoIcons" />
                    <h3>18</h3>
                  </div>
                  <div className="Infos">
                    <FaLocationDot className="InfoIcons" />
                    <h3>Italy</h3>
                  </div>
                  <div className="Infos">
                    <FaSun className="InfoIcons" />
                    <h3>Discovery</h3>
                  </div>
                </div>

                <div className="wordAndVideoContent">
                  <div className="paragraph1">
                    <p>
                      I should be incapable of drawing a single stroke at the
                      present moment; and yet I feel that I never was a greater
                      artist than now. When, while the lovely valley teems with
                      vapour around me, and the meridian sun strikes the upper
                      surface of the impenetrable foliage of my trees, and but a
                      few stray gleams.
                    </p>
                  </div>
                  <div className="paragraph2">
                    <p>
                      I should be incapable of drawing a single stroke at the
                      present moment; and yet I feel that I never was a greater
                      artist than now. When, while the lovely valley teems with
                      vapour around me, and the meridian sun strikes the upper
                      surface of the impenetrable foliage of my trees, and but a
                      few stray gleams steal into the inner sanctuary, I throw
                      myself down among the tall grass by the trickling stream;
                      and, as I lie close to the earth, a thousand unknown
                      plants are noticed by me: when I hear the buzz of the
                      little world among the stalks, and grow familiar with the
                      countless indescribable forms of the insects and flies,
                      then I feel the presence of the Almighty, who formed us in
                      his own image, and the breath
                    </p>
                  </div>
                  <div className="video">
                    <video
                      width="100%"
                      height="360"
                      muted
                      controls
                      loop
                      autoPlay
                      className="videoOG"
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="table">
                  <table>
                    <tr>
                      <td>Destination</td>
                      <td>Greece</td>
                    </tr>
                    <tr>
                      <td>Departure</td>
                      <td>Lorem Ipsum</td>
                    </tr>
                    <tr>
                      <td>Departure Time</td>
                      <td>9:15 AM To 9:30 AM.</td>
                    </tr>
                    <tr>
                      <td>Return Time</td>
                      <td>Approximately 10:30 PM.</td>
                    </tr>
                    <tr>
                      <td>Dress Code</td>
                      <td>comfortable clothing and light jacket.</td>
                    </tr>
                    <tr>
                      <td>Price Included</td>
                      <td className="tablelist">
                        <span>
                          <TiTick className="iconn" /> 5 Star Accommodation
                        </span>
                        <span>
                          <TiTick className="iconn" /> Air fases
                        </span>
                        <span>
                          <TiTick className="iconn" /> 3 Nights Hotel
                          Accomodation
                        </span>
                        <span>
                          <TiTick className="iconn" /> All transportation in
                          destination location
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Price Not Included</td>
                      <td className="tablelist">
                        <span>
                          <RiCloseFill className="iconns" />
                          Guide Service Feesp
                        </span>
                        <span>
                          <RiCloseFill className="iconns" />
                          Any Private Expenses
                        </span>
                        <span>
                          <RiCloseFill className="iconns" />
                          Room Service Fees
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="trandingImg">
                  <button className="slider-btn"> Previous </button>
                  <div className="IMG_container">
                    <div className="IMG">
                      <img className="" src={bird} alt="" />
                    </div>
                    <div className="IMG">
                      <img src={people} alt="" />
                    </div>
                    <div className="IMG">
                      <img src={landscape} alt="" />
                    </div>
                  </div>
                  <button className="slider-btn1"> Next </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bookThisTour">
            <div className="bookThisTour_container">
              <h1 className="bookThisTour_Title">BOOK THIS TOUR</h1>
              <form action="#" method="get" className="bookThisTourForm">
                <div className="bookingInput">
                  <input
                    placeholder="Full Name*"
                    type="text"
                    name="FullName"
                    id="FullName"
                  />
                  <input
                    placeholder="Email*"
                    type="email"
                    name="email"
                    id="FullName"
                  />
                  <input
                    placeholder="COnfirm Email*"
                    type="email"
                    name="email"
                    id="FullName"
                  />
                  <input
                    placeholder="Phone*"
                    type="text"
                    name="phone"
                    id="FullName"
                  />
                  <input
                    type="date"
                    name="date"
                    id="FullName"
                  />
                  <input
                    placeholder="Numbers Of Tickets*"
                    type="text"
                    name="phone"
                    id="FullName"
                  />
                </div>
                <div className="messages">
                  <textarea 
                  placeholder="Message"
                  type="text" 
                  name="message" 
                  id="message" 
                  />
                </div>
                <div className="checkAvailability">
                <input type="checkbox" name="checker" id="checker" />
                <label htmlFor="checkeAvailability">Check Availability</label>
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
              <p>
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you.
              </p>
              <h5>holidayplanners@gmail.com</h5>
              <h5>+123 456 789</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToulDetails;
