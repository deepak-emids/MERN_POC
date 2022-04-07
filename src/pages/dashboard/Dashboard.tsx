import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import About from "../about/About";
import Navbar from "../../navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Contact from "../contact/Contact";
import Profile from "../profile/Profile";
import Role from "../roles/Roles";
import Department from "../deparment/Department";
import EmployeeForm from "../../components/employeeForm/EmployeeForm";
import Employee from "../employees/Employee";

//css
import "./dashboard.scss";

export default function Dashboard() {
  let navigate = useNavigate();

  //modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(false);
    navigate("/profile");
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/about");
  };

  return (
    <div className="main-dashboard">
      <Navbar />
      <div className="modal-content">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update Your profile
            </Typography>
            <Button onClick={handleOpen}>Yes</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Modal>

        <div className="page-content">
          {open ? null : (
            <div className="pages">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/addEmployee" element={<EmployeeForm />} />
                <Route path="/department" element={<Department />} />
                <Route path="/role" element={<Role />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
