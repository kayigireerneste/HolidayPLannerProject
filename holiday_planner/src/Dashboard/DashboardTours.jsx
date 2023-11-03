import "../DashboardCSS/DashboardTours.css";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";





const DashboardTours = () => {
  return (
    <div className="DashTours_Content">
      <div className="DashTourBar">
        <h1 className="TITLE">TOURS</h1>
        <button className="AddTourBTN">
          <IoMdAddCircle className="AddTourIcon" />
          Add Tour
        </button>
      </div>
      <div className="Dashtours_container">
        <div className="ToursTable">
          <table>
            <tr>
              <th>Destination</th>
              <th>Duration</th>
              <th>Group Size</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>Italy</td>
              <td>7 days 8 hours</td>
              <td>50+ People</td>
              <td>$ 750</td>
              <td>
                <GrFormEdit className="editor"/>
                <MdOutlineDeleteForever className="delete"/>
              </td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>7 days 8 hours</td>
              <td>50+ People</td>
              <td>$ 750</td>
              <td>
                <GrFormEdit className="editor"/>
                <MdOutlineDeleteForever className="delete"/>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTours;
