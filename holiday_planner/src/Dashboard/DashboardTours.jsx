import "../DashboardCSS/DashboardTours.css";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";
import { useState } from "react";
import axios from "axios";
import Notiflix from "notiflix";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FileInput,
  ReusableForm,
  TextInput,
  ReusableButton,
} from "../reUsableForm/ReUsableForm.jsx";
import { MyContext } from "../AppContext";

const DashboardTours = () => {
  // const navigate = useNavigate()
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
  const onSubmitAddTour = (data) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", data);
    const formDataApper = new FormData();
    formDataApper.append("backdropImage", data.backdropImage[0]);
    formDataApper.append("destination", data.destination);
    formDataApper.append("Duration", data.duration);
    formDataApper.append("GroupSize", data.group_size);
    formDataApper.append("Price", data.price);
    formDataApper.append("Discount", data.discount);
    formDataApper.append("TourType", data.tour_type);
    formDataApper.append("Departure", data.departure);
    formDataApper.append("Description", data.description);
    console.log("###################", formDataApper);

    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
      data: formDataApper,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setTimeout(() => {
          handleClose(true);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const onSubmitEditTour = (data) => {
    console.log("papapapapapapapapapapapapapapapapapapa", data);
  };


  const handleDeleteTour = (id) => {
    console.log(id, "ID")
    if(window.confirm("Do you really want to delete this tour!?")) {
      let token = localStorage.getItem("token")
      console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjj",token)
      axios({
        url:`https://holiday-planner-4lnj.onrender.com/api/v1/tour/deleteAll?fieldName=_id&value=${id}`,
        method: "DELETE",
        headers:{
          Authorization:`Bearer $(token)`
        },
        // data: {
        //   fieldName: "_id",
        //   value: id
        // }
      })
      .then((response) => {
        toast.success("Tour deleted sucessfully!!!")
        console.log(response, "Response")
      }).catch((error) => {
        toast.error("Oops, fail to delete Tour!!!")
        console.log(error, "Error")
      })
    }
  }













  return (
    <div className="DashTours_Content">
      <ToastContainer />
      {modal && (
        <div className="addToursForm_Container">
          <div onClick={handleClose} className="overlay"></div>
          <div className="AddToursForm">
            <ReusableForm onSubmit={onSubmitAddTour}>
              <TextInput
                placeholder="input your place"
                type="text"
                name="destination"
                label="Destination"
              />
              <FileInput name="backdropImage" label="Image" />
              <TextInput
                placeholder="describe your tour"
                type="text"
                name="description"
                label="Description"
              />
              <TextInput
                placeholder="how long will tour take?"
                type="text"
                name="duration"
                label="Duration"
              />
              <TextInput
                placeholder="how many are you?"
                type="number"
                name="group_size"
                label="Group_Size"
              />
              <TextInput
                placeholder="howmuch is tour cost?"
                type="text"
                name="price"
                label="Price"
              />
              <TextInput
                placeholder="input discount provided"
                type="text"
                name="discount"
                label="Discount"
              />
              <TextInput
                placeholder="what is the type of your tour?"
                type="text"
                name="tour_type"
                label="Tour_type"
              />
              <TextInput
                placeholder="when where you stay there?"
                type="date"
                name="departure"
                label="Departure"
              />
              <div className="butons">
                <ReusableButton
                  type="submit"
                  text="SUBMIT"
                  className="Addtour-button"
                />
                <ReusableButton
                  onClick={handleClose}
                  text="CLOSE"
                  className="Addtour-button"
                />
              </div>
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
              <ReusableForm onSubmit={onSubmitEditTour}>
                <TextInput type="text" name="destination" label="Destination" />
                <FileInput name="backdropImage" label="Image" />
                <TextInput type="text" name="description" label="Description" />
                <TextInput type="text" name="duration" label="Duration" />
                <TextInput type="number" name="group_size" label="Group_Size" />
                <TextInput type="text" name="price" label="Price" />
                <TextInput type="text" name="discount" label="Discount" />
                <TextInput type="text" name="tour_type" label="Tour_type" />
                <TextInput type="date" name="departure" label="Departure" />
                <div className="butons">
                  <ReusableButton
                    type="submit"
                    text="SUBMIT"
                    className="Addtour-button"
                  />
                  <ReusableButton
                    onClick={handleCloseEditModal}
                    text="CLOSE"
                    className="Addtour-button"
                  />
                </div>
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
                <td className="AddTourImages-container">
                  <img
                    className="AddTourImages"
                    src={tour?.backdropImage}
                    alt="tours Images not displaying"
                  />
                </td>
                <td>{tour?.destination}</td>
                <td>{tour?.Duration}</td>
                <td>{tour?.GroupSize}</td>
                <td>{tour?.Price}</td>
                <td>
                  <GrFormEdit
                    onClick={handleOpenEditModal}
                    className="editor"
                  />
                  <MdOutlineDeleteForever onClick={()=>handleDeleteTour(tour?._id)} className="delete" />
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
