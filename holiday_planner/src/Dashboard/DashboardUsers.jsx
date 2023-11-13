import "../DashboardCSS/DashboardUsers.css"
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";
import { MyContext } from "../AppContext";



const DashboardUsers = () => {

  const { dashUsers } = MyContext();
  console.log("kkkkkkkkkkkkkkkkkkk", dashUsers);








    return ( 
        <div className="DashUsers_COntent">
            <div className="UsersTitle">
                <h1 className="TiTles">All Registered Users</h1>
            </div>
            <div className="UsersTable">
          <table>
            <tr>
              <th>Null Names</th>
              <th>Email</th>
              <th>Location</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
            
            {dashUsers?.map((user) => (
            <tr key={user?._id}>
              <td>{user?.fullName}</td>
              <td>{user?.email}</td>
              <td>{user?.location}</td>
              <td>{user?.phone}</td>
              <td>{user?.role}</td>
              <td>
                  <GrFormEdit className="editor" />
                  <MdOutlineDeleteForever className="delete" />
              </td>
            </tr>
          ))}
          </table>
        </div>
        </div>
     );
}
 
export default DashboardUsers;