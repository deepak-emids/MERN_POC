import "./App.css";
import User from "./pages/user/User";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Employee from "./pages/employees/Employee";
import Department from "./pages/deparment/Department";
import Role from "./pages/roles/Roles";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import EmployeeForm from "./components/employeeForm/EmployeeForm";
import DepartmentForm from "./components/departmentForm/DepartmentForm";
import RoleForm from "./components/roleForm/RoleForm";
import Snackbar from "../src/components/snackbar/Snackbar";
import DatePicker from "../src/components/date/DatePicker";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<User />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addEmployee" element={<EmployeeForm />} />
          <Route path="/departmentForm" element={<DepartmentForm />} />
          <Route path="/roleForm" element={<RoleForm />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/department" element={<Department />} />
          <Route path="/role" element={<Role />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
