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
import BasicModal from "../../components/Modal/Modal";

//css
import "./dashboard.scss";

export default function Dashboard() {
  let employeeId: any = localStorage.getItem("employeeId");

  const [emp, setEmp] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    date_Of_Joining: "",
    address: "",
    mobileNo: "",
    aadharId: "",
    department_Id: "",
    role_Id: "",
  });

  let navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    handleGetAllEmployees();
    handleGetAllDepartment();
    handleGetAllRoles();
    handleGetAllRoles();
    getEmployee(employeeId);
  }, []);

  const getEmployee = (employeeId: any) => {
    employeeService
      .getEmployee(employeeId)
      .then((res) => {
        setEmp(res.data.data);
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

  const employee = useSelector(
    (state: any) => state.getEmployeeDetails.employeeDetails
  );

  const isEmpty = Object.values(emp).every((x) => x == "" || x == null);

  console.log(isEmpty, "empty", emp.address);

  return (
    <div className="main-dashboard">
      <Navbar />
      <div className="modal-content">
        {/* <BasicModal /> */}

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
