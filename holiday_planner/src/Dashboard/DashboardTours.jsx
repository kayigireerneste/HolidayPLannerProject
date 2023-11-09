import "../DashboardCSS/DashboardTours.css";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";
import { useState } from "react";
import { FileInput, ReusableForm, TextInput, } from "../reUsableForm/ReUsableForm.jsx";
import { MyContext } from "../AppContext";

const DashboardTours = () => {
  // adding Tour modal
  const [modal, setModal] = useState(false);
  // fetching all tours
  const { dashTours } = MyContext();
  console.log("_________________", dashTours);

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  //Edit modal close and open
  const [EditModal, setEditModal] = useState(false);

  const handleOpenEditModal = () => {
    setEditModal(true);
  };

  const handleCloseEditModal = () => {
    setEditModal(false);
  };

  // adding new tour mode
  const [destination,setDestination] = useState("");
  const [image,setImage] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [price,setPrice] = useState("");
  const [discount,setDiscount] = useState("");
  const [tourType,setTourType] = useState("");
  const [departure,setDeparture] =useState("");







  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="DashTours_Content">
      {modal && (
        <div className="addToursForm_Container">
          <div onClick={handleClose} className="overlay"></div>
          <div className="AddToursForm">
            <ReusableForm onSubmit={onSubmit}>
              <TextInput placeholder="input your place" type="text" name="destination" label="Destination" />
              <FileInput name="backdropImage" label="Image" />
              <TextInput placeholder="describe your tour" type="text" name="description" label="Description" />
              <TextInput placeholder="how long will tour take?" type="text" name="duration" label="Duration" />
              <TextInput placeholder="how many are you?" type="text" name="group_size" label="Group_Size" />
              <TextInput placeholder="howmuch is tour cost?" type="text" name="price" label="Price" />
              <TextInput placeholder="input discount provided" type="text" name="discount" label="Discount" />
              <TextInput placeholder="what is the type of your tour?" type="text" name="tour_type" label="Tour_type" />
              <TextInput placeholder="when where you stay there?" type="text" name="departure" label="Departure" />
            </ReusableForm>
          </div>
        </div>
      )}
      <div className="DashTourBar">
        <h1 className="TITLE">TOURS</h1>
        <button onClick={handleOpen} className="AddTourBTN">
          <IoMdAddCircle className="AddTourIcon" />
          Add Tour
        </button>
      </div>
      <div className="Dashtours_container">
        {EditModal && (
          <div className="addToursForm_Container">
            <div onClick={handleCloseEditModal} className="overlay"></div>
            <div className="AddToursForm">
              <ReusableForm onSubmit={onSubmit}>
                <TextInput type="text" name="destination" label="Destination" />
                <FileInput name="backdropImage" label="Image" />
                <TextInput type="text" name="description" label="Description" />
                <TextInput type="text" name="duration" label="Duration" />
                <TextInput type="text" name="group_size" label="Group_Size" />
                <TextInput type="text" name="price" label="Price" />
                <TextInput type="text" name="discount" label="Discount" />
                <TextInput type="text" name="tour_type" label="Tour_type" />
                <TextInput type="text" name="departure" label="Departure" />
              </ReusableForm>
            </div>
          </div>
        )}
        <div className="ToursTable">
          <table>
            <tr>
              <th>Image</th>
              <th>Destination</th>
              <th>Duration</th>
              <th>Group Size</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            {dashTours?.map((tour) => (
              <tr key={tour?._id}>
                <td className="AddTourImages-container" ><img className="AddTourImages" src={tour?.backdropImage} alt="tours Images not displaying" /></td>
                <td>{tour?.destination}</td>
                <td>{tour?.Duration}</td>
                <td>{tour?.Group_size}</td>
                <td>{tour?.Price}</td>
                <td>
                  <GrFormEdit onClick={handleOpenEditModal} className="editor" />
                  <MdOutlineDeleteForever className="delete" />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTours;
