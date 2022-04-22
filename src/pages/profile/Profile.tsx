import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";
import { useSelector, useDispatch } from "react-redux";
// import Snackbar from "../../components/snackbar/Snackbar";
import { updateEmployee } from "../../store/actions/EmployeeActions";
import { getEmployee } from "../../store/actions/EmployeeActions";
import "./profile.scss";

export default function Profile() {
  let employeeId: any = localStorage.getItem("employeeId");

  const [disableSave, setDisableSave] = React.useState(true);

  const handleDisableSave = () => {
    setDisableSave(false);
  };

  const dispatch = useDispatch();

  React.useEffect(() => {}, []);

  let employee = useSelector((state: any) => state.Employee.employee);

  const [emp, setEmp] = React.useState(employee);

  const [password, setPassword] = React.useState("");

  const changeField = (e: any) => {
    setEmp((previousstate: any) => ({
      ...previousstate,
      [e.target.name]: e.target.value,
    }));
  };

  const changePassword = (e: any) => {
    let pass = e.target.value;
    setPassword(pass);
  };

  const next = () => {
    let data;
    if (password !== "") {
      data = {
        email: emp.email,
        address: emp.address,
        password: password,
        mobileNo: emp.mobileNo,
      };
    } else {
      data = {
        email: emp.email,
        address: emp.address,
        mobileNo: emp.mobileNo,
      };
    }

    dispatch(updateEmployee(emp.id, data));
    dispatch(getEmployee(emp.id));
  };

  return (
    <div className="empl-details">
      <form className="empl-form" onClick={handleDisableSave}>
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
            // value={password}
            variant="standard"
            size="small"
            className="form-detail"
            helperText="*password size must be greater than 4 and has atleast one number"
            onChange={(e) => {
              changePassword(e);
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

        <Button onClick={next} variant="contained" disabled={disableSave}>
          SAVE
        </Button>
      </form>
      <img
        className="backp"
        src={back}
        alt="this is logo"
        data-testid="profile1"
      ></img>
    </div>
  );
}
