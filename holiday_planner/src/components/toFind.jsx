import "../css/toFind.css";
import { BsFillFlagFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const ToFind = () => {
  return (
    <div className="to_find_content">
      <div className="locate">
        <FaLocationDot className="loc_icon" />
        <input placeholder="Where To?" className="where" type="text" name="where" id="where" />
      </div>
      <div className="when">
        <input className="on_date" type="month" name="date" id="date" />
      </div>
      <div className="options">
        <BsFillFlagFill className="opt_icon"/>
        <select id="selections" name="fruit">
          <option value="Travel">Travel Type</option>
          <option value="Cultural">Cultural</option>
          <option value="Advanture">Advanture</option>
          <option value="Historical">Historical</option>
          <option value="Seaside">Seaside</option>
          <option value="Discovery">Discovery</option>
        </select>
      </div>
      <button className="submit_location">
            FIND NOW
      </button>
    </div>
  );
};

export default ToFind;
