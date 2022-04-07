import "./App.css";
import User from "./pages/user/User";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tables from "./components/table/Tables";
import About from "./pages/about/About";
import Navbar from "./navbar/Navbar";
import Footer from "./components/footer/Footer";
import Employee from "./pages/employees/Employee";
import Department from "./pages/deparment/Department";
import Role from "./pages/roles/Roles";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import EmployeeForm from "./components/employeeForm/EmployeeForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<User />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addEmployee" element={<EmployeeForm />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/department" element={<Department />} />
            <Route path="/role" element={<Role />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
