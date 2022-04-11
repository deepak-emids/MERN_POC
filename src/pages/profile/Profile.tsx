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

  const [snackbar, setSnackbar] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getEmployee(employeeId);
  }, []);

  let employee = useSelector((state: any) => state.getEmployee.employee);

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

  const getEmployee = (employeeId: any) => {
    service
      .getEmployee(employeeId)
      .then((res) => {
        setEmp(res.data.data);
        dispatch(fetchEmployeeDetails(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateEmployee = (id: any, data: {}) => {
    service
      .updateEmployee(id, data)
      .then((res) => {
        console.log(res);
        setSnackbar(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeField = (e: any) => {
    setEmp((previousstate: any) => ({
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

  const showSnackbar = () => {
    let show: any = "";
    if (snackbar) {
      show = <Snackbar message="Profile Updated Successfully" />;
      setTimeout(() => {
        setSnackbar(false);
      }, 2000);
    }

    return show;
  };

  return (
    <div className="empl-details">
      <form className="empl-form">
        <h2>Employee Basic Details</h2>
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
            value={emp.department_Id}
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
            value={emp.password}
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
      <div>{showSnackbar()}</div>
      <img
        className="backp"
        src={back}
        alt="this is logo"
        data-testid="profile1"
      ></img>
    </div>
  );
}
