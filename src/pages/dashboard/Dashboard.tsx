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
import DepartmentForm from "../../components/departmentForm/DepartmentForm";
import RoleForm from "../../components/roleForm/RoleForm";
import employeeService from "../../services/employeeService/employeeService";
import departmentService from "../../services/depertmentService/departmentService";
import roleService from "../../services/roleService/roleService";
import { fetchEmployeeDetails } from "../../store/actions";
import { fetchEmployee } from "../../store/actions";
import { fetchDepartment } from "../../store/actions";
import { fetchRole } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "../../components/snackbar/Snackbar";
import AccessDenied from "../../components/accessDenied/AccessDenied";

//css
import "./dashboard.scss";

export default function Dashboard() {
  let employeeId: any = localStorage.getItem("employeeId");

  let navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    handleGetAllDepartment();
    handleGetAllRoles();
    handleGetAllRoles();
    getEmployee(employeeId);
  }, []);

  const employee = useSelector(
    (state: any) => state.getEmployeeDetails.employeeDetails
  );

  console.log(employee.firstName);

  let isError: boolean = false;
  let firstNameError = employee.firstName === "" ? true : false;
  let lastNameError = employee.lastName === "" ? true : false;
  let emailError = employee.email === "" ? true : false;
  let department_IdError = employee.department_Id === "" ? true : false;
  let date_Of_JoiningError = employee.date_Of_Joining === "" ? true : false;
  let addressError = employee.address === "" ? true : false;
  let role_IdError = employee.role_Id === "" ? true : false;
  let passwordError = employee.password === "" ? true : false;
  let mobileNoError = employee.mobileNo === "" ? true : false;
  let aadharIdError = employee.aadharId === "" ? true : false;

  isError =
    emailError ||
    department_IdError ||
    firstNameError ||
    lastNameError ||
    date_Of_JoiningError ||
    addressError ||
    passwordError ||
    role_IdError ||
    mobileNoError ||
    aadharIdError;

  console.log(isError);

  const getEmployee = (employeeId: any) => {
    employeeService
      .getEmployee(employeeId)
      .then((res) => {
        dispatch(fetchEmployeeDetails(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetAllRoles = () => {
    roleService
      .getAllRole()
      .then((res) => {
        dispatch(fetchRole(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetAllEmployees = () => {
    employeeService
      .getAllEmployee()
      .then((res) => {
        dispatch(fetchEmployee(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetAllDepartment = () => {
    departmentService
      .getAllDepartment()
      .then((res) => {
        dispatch(fetchDepartment(res.data.data));
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

  const handleOpen = () => {
    setOpen(false);
    navigate("/profile");
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <div className="main-dashboard">
      <Navbar />
      <div className="modal-content">
        {/* <Modal
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
        </Modal> */}

        <div className="page-content">
          <div className="pages">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/addEmployee" element={<EmployeeForm />} />
              <Route path="/departmentForm" element={<DepartmentForm />} />
              <Route path="/roleForm" element={<RoleForm />} />
              <Route path="/department" element={<Department />} />
              <Route path="/role" element={<Role />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/accessdenied" element={<AccessDenied />} />

              <Route path="/*" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
