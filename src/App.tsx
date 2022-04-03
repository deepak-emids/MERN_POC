import "./App.css";
import User from "./pages/user/User";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tables from "./components/table/Tables";
import About from "./pages/about/About";
import Navbar from "./navbar/Navbar";
import Footer from "./components/footer/footer";
import Employee from "./pages/employees/Employee";
import Department from "./pages/deparment/Department";
import Role from "./pages/roles/Roles";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/department" element={<Department />} />
          <Route path="/role" element={<Role />} />
          <Route path="/" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
