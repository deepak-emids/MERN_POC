import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/employeeService/employeeService";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";
import deptService from "../../services/depertmentService/departmentService";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "../../components/snackbar/Snackbar";

import "./profile.scss";
import { fetchEmployeeDetails } from "../../store/actions";

export default function Profile() {
  let employeeId: any = localStorage.getItem("employeeId");
  // const dispatch = useDispatch();

  React.useEffect(() => {
    // getEmployee(employeeId);
    // getDepartment(department_Id);
  }, []);

  // const employeeData = () => {
  //   let emp = useSelector((state: any) => state.getEmployee.employee);
  // };

  const [emp, setEmp] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    date_Of_Joining: "",
    address: "",
    mobileNo: "",
    aadharId: "",
    password: "",
    department_Id: "",
    role_Id: "",
  });

  // const [department, setDepartment] = React.useState("");

  // let department_Id = emp.department_Id;

  // const getEmployee = (employeeId: any) => {
  //   service
  //     .getEmployee(employeeId)
  //     .then((res) => {
  //       setEmp(res.data.data);
  //       dispatch(fetchEmployeeDetails(res.data.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const getDepartment = (department_Id: any) => {
  //   deptService
  //     .getDepartment(department_Id)
  //     .then((res) => {
  //       setDepartment(res.data.data.departmentName);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const updateEmployee = (id: any, data: {}) => {
    service
      .updateEmployee(id, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeField = (e: any) => {
    setEmp((previousstate) => ({
      ...previousstate,
      [e.target.name]: e.target.value,
    }));
  };

  const next = () => {
    let data = {
      email: emp.email,
      address: emp.address,
      password: emp.password,
      mobileNo: emp.mobileNo,
    };
    let id = localStorage.getItem("employeeId");

    updateEmployee(id, data);
  };

  return (
    <div className="empl-details">
      <form className="empl-form">
        <h3>Employee Basic Details</h3>
        <div className="note">
          *Only Phone,Address,Email And Password Is Editable
        </div>

        <div
          className="name"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            label="First Name"
            name="firstName"
            value={emp.firstName}
            variant="standard"
            size="small"
            className="form-detail"
            inputProps={{ readOnly: true }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="lastName"
            label="last Name"
            value={emp.lastName}
            variant="standard"
            size="small"
            className="form-detail"
            inputProps={{ readOnly: true }}
          ></TextField>
        </div>

        <div
          className="name"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="mobileNo"
            label="Mobile No"
            value={emp.mobileNo}
            variant="standard"
            size="small"
            className="form-detail"
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="aadharId"
            label="Aadhar Id"
            value={emp.aadharId}
            variant="standard"
            size="small"
            className="form-detail"
            inputProps={{ readOnly: true }}
          ></TextField>
        </div>

        <div
          className="name"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="department_Id"
            label="Department"
            variant="standard"
            size="small"
            className="form-detail"
            inputProps={{ readOnly: true }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="date_Of_Joining"
            label="Date Of Joining"
            value={emp.date_Of_Joining}
            variant="standard"
            size="small"
            className=" "
            inputProps={{ readOnly: true }}
          ></TextField>
        </div>

        <div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            name="email"
            label="Email"
            value={emp.email}
            variant="standard"
            size="small"
            className="form-detail"
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            name="password"
            label="Password"
            type="password"
            variant="standard"
            size="small"
            className="form-detail"
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>

        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          name="address"
          label="Address"
          value={emp.address}
          variant="standard"
          size="small"
          className="form-detail"
          onChange={(e) => {
            changeField(e);
          }}
        ></TextField>

        <Button
          onClick={next}
          style={{ backgroundColor: "#3371B5", color: "white" }}
        >
          SAVE
        </Button>
      </form>
      <img
        className="back"
        src={back}
        alt="this is logo"
        data-testid="profile1"
      ></img>
    </div>
  );
}
