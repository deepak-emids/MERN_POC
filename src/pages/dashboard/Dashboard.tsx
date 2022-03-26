import * as React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import service from "../../services/services";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import { Routes, Route, Link } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
// import Profile from "../../components/profile/Profile";

import Tables from "../../components/table/Tables";
import About from "../../components/about/About";
import AddForm from "../../components/AddEmployee/AddEmployee";

//css
import "./dashboard.scss";

//------------------------------------------------Drawer(END)

export default function Dashboard() {
  const [emp, setEmp] = React.useState([]);
  const [department, setDepartment] = React.useState([]);

  React.useEffect(() => {
    handleGetAllEmployees();
    handleGetAllDepartment();
  }, []);

  let navigate = useNavigate();

  //------------------------------------------------SideBarIcon

  //------------------------------------------------SideBarIcon(END)

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

  const [open, setOpen] = React.useState(false);
  const [table, setTable] = React.useState(false);

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

  return (
    <div className="welcome">
      <div className="card-welcome">
        <div className="card-header">
          {" "}
          <Header handleSideBar={handleSideBar} />
        </div>

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

      <div className="card-footer">
        <Footer />
      </div>
    </div>
  );
}
