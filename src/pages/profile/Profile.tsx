import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/services";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";

import "./profile.scss";

let employeeId: any = localStorage.getItem("employeeId");

export default function Profile() {
  React.useEffect(() => {
    getEmployee(employeeId);
  }, []);

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (data: any) => {
    console.log(data);
  };

  const [field, setField] = React.useState({
    email: "",
    address: "",
    mobileNo: "",
    password: "",

    emailError: false,
    addressError: false,
    passwordError: false,
    mobileNoError: false,
  });

  const changeField = (e: any) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    let emailError = field.email === "" ? true : false;
    let addressError = field.address === "" ? true : false;
    let passwordError = field.password === "" ? true : false;
    let mobileNoError = field.mobileNo === "" ? true : false;

    setField((previousvalues: any) => {
      return {
        ...previousvalues,
        emailError: emailError,
        addressError: addressError,
        passwordError: passwordError,
        mobileNoError: mobileNoError,
      };
    });
    return (isError =
      field.emailError ||
      field.addressError ||
      field.passwordError ||
      field.mobileNoError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        employeeId: null,
        email: field.email,
        address: field.address,
        password: field.password,
        mobileNo: field.mobileNo,
      };

      // addProfile api
      handleUpdate(data);
    }
  };

  return (
    <div className="emp-details">
      <form className="emp-form">
        <div>Employee Basic Details</div>
        <br></br>
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
            helperText={field.mobileNoError ? "mobileNo is required" : " "}
            error={field.mobileNoError}
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
            value={emp.department_Id}
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
            helperText={field.emailError ? "email is required" : " "}
            error={field.emailError}
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
            helperText={field.passwordError ? "password is required" : " "}
            error={field.passwordError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>

        <div
          className="name"
          style={{ display: "flex", justifyContent: "space-between" }}
        ></div>

        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          name="address"
          label="Address"
          value={emp.address}
          variant="standard"
          size="small"
          className="form-detail"
          helperText={field.addressError ? " address is required" : " "}
          error={field.addressError}
          onChange={(e) => {
            changeField(e);
          }}
        ></TextField>

        <Button
          onClick={next}
          style={{ backgroundColor: "#3371B5", color: "white" }}
        >
          Edit
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
