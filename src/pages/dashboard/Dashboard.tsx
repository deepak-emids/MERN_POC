import * as React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import service from "../../services/services";
import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";

import { Routes, Route, Link } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
// import Profile from "../../components/profile/Profile";

import Tables from "../../components/table/Tables";
import About from "../../components/about/About";
import AddForm from "../../components/AddEmployee/AddEmployee";
import Navbar from "../../navbar/Navbar";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

//css
import "./dashboard.scss";

export default function Dashboard() {
  const [emp, setEmp] = React.useState([]);
  const [department, setDepartment] = React.useState([]);
  const [table, setTable] = React.useState(false);

  React.useEffect(() => {
    handleGetAllEmployees();
    handleGetAllDepartment();
  }, []);

  let navigate = useNavigate();

  const handleSideBar = (text: string) => {
    if (text == "Profile") {
      setTable(!table);
      navigate("/profile");
    } else if (text == "Department") {
      setTable(!table);
      navigate("/department");
    } else if (text == "Employees") {
      setTable(!table);
      navigate("/employees");
    } else if (text == "About") {
      setTable(!table);
      navigate("/about");
    } else if (text == "Logout") {
      navigate("/login");
    } else {
      console.log("page not found", text);
    }
  };

  //------------------------------------------------Methods

  const handleGetAllEmployees = () => {
    service
      .getAllEmployee()
      .then((res) => {
        console.log(res.data.data, "employees in get");
        setEmp(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetAllDepartment = () => {
    service
      .getAllDepartment()
      .then((res) => {
        console.log(res.data.data, "department in get");
        setDepartment(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //modal

  return (
    <div className="welcome">
      <div className="card-welcome">
        <div>
          <Navbar />
        </div>
        <div className="card-header">
          {" "}
          <Header handleSideBar={handleSideBar} />
        </div>

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
            <Button onClick={handleClose}>Yes</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Modal>

        <div className="tablecard">
          {table ? (
            <div className="content">
              <Routes>
                <Route path="/about" element={<About />} />

                <Route
                  path="/employees"
                  element={
                    <Tables
                      data={emp}
                      mode="employees"
                      refresh={handleGetAllEmployees}
                    />
                  }
                />
                <Route
                  path="/department"
                  element={
                    <Tables
                      data={department}
                      mode="department"
                      refresh={handleGetAllDepartment}
                    />
                  }
                />
                <Route path="/addForm" element={<AddForm />} />

                <Route path="/project" element={<Tables emp={emp} />} />
                <Route path="/logout" element={<Tables emp={emp} />} />
              </Routes>
            </div>
          ) : null}
        </div>

        <Welcome />
      </div>

      {/* <div className="table">
    

        <div>
          <img src={tableimg} className="tableimge"></img>
        </div>
      </div> */}

      {/* <div className="card-footer">
        <Footer />
      </div> */}
    </div>
  );
}
