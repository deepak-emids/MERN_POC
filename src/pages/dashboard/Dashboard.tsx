import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
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
import AccessDenied from "../../components/accessDenied/AccessDenied";
import BasicModal from "../../components/Modal/Modal";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar2 from "../../store/reducer/Snackbar";

//css
import "./dashboard.scss";

export default function Dashboard() {
  const dispatch = useDispatch();

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const snackbar: boolean = useSelector((state: any) => state.Snackbar.open);
  const [snack, setSnack] = React.useState(snackbar);
  const [open, setOpen] = React.useState(snackbar);

  React.useCallback(() => {}, [snackbar]);

  let employeeId: any = localStorage.getItem("employeeId");

  let navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getEmployees());
    dispatch(getEmployee(employeeId));
    dispatch(getDepartments());
    dispatch(getRoles());
  }, []);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="main-dashboard">
      <Navbar />
      <div className="modal-content">
        <BasicModal />

        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </Alert>
          </Snackbar>
        </Stack>

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
