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
import { getEmployees } from "../../store/actions/EmployeeActions";
import { getEmployee } from "../../store/actions/EmployeeActions";
import { getDepartments } from "../../store/actions/DepartmentActions";
import { getRoles } from "../../store/actions/RoleActions";
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
    dispatch(getEmployees());
    dispatch(getEmployee(employeeId));
    dispatch(getDepartments());
    dispatch(getRoles());
  }, []);

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
