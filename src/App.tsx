import "./App.css";
import User from "./pages/user/User";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tables from "./components/table/Tables";
import About from "./components/about/About";
import Navbar from "./navbar/Navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<User />} />
          <Route path="/table" element={<Tables />} />

          <Route path="/" element={<Dashboard />}>
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Tables />} />
            <Route path="/employees" element={<Tables />} />
            {/* <Route path="/addForm" element={<AddForm />} /> */}

            <Route path="/department" element={<Tables />} />
            <Route path="/project" element={<Tables />} />
            <Route path="/logout" element={<Tables />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
