import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/employeeService/employeeService";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";
import { useNavigate } from "react-router-dom";
import { EmployeeData } from "../../models/model";

import "./employeeForm.scss";
import { Navigate } from "react-router";

let value = {
  firstName: "",
  lastName: "",
  email: "",
  department_Id: "",
  date_Of_Joining: "",
  address: "",
  role_Id: "",
  password: "",
  mobileNo: "",
  aadharId: "",

  firstNameError: false,
  lastNameError: false,
  emailError: false,
  department_IdError: false,
  date_Of_JoiningError: false,
  addressError: false,
  role_IdError: false,
  passwordError: false,
  mobileNoError: false,
  aadharIdError: false,
};

export default function EmployeeForm() {
  const navigate = useNavigate();

  const addEmployee = (data: EmployeeData) => {
    service
      .addEmployee(data)
      .then((res) => {
        console.log(res);
        setField(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [field, setField] = React.useState(value);

  const changeField = (e: any) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    let firstNameError = field.firstName === "" ? true : false;
    let lastNameError = field.lastName === "" ? true : false;
    let emailError = field.email === "" ? true : false;
    let department_IdError = field.department_Id === "" ? true : false;
    let date_Of_JoiningError = field.date_Of_Joining === "" ? true : false;
    let addressError = field.address === "" ? true : false;
    let role_IdError = field.role_Id === "" ? true : false;
    let passwordError = field.password === "" ? true : false;
    let mobileNoError = field.mobileNo === "" ? true : false;
    let aadharIdError = field.aadharId === "" ? true : false;

    setField((previousvalues) => {
      return {
        ...previousvalues,
        firstNameError: firstNameError,
        lastNameError: lastNameError,
        emailError: emailError,
        department_IdError: department_IdError,
        date_Of_JoiningError: date_Of_JoiningError,
        addressError: addressError,
        role_IdError: role_IdError,
        passwordError: passwordError,
        mobileNoError: mobileNoError,
        aadharIdError: aadharIdError,
      };
    });
    return (isError =
      field.emailError ||
      field.department_IdError ||
      field.firstNameError ||
      field.lastNameError ||
      field.date_Of_JoiningError ||
      field.addressError ||
      field.passwordError ||
      field.role_IdError ||
      field.mobileNoError ||
      field.aadharIdError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        firstName: field.firstName,
        lastName: field.lastName,
        email: field.email,
        department_Id: field.department_Id,
        date_Of_Joining: field.date_Of_Joining,
        address: field.address,
        password: field.password,
        role_Id: field.role_Id,
        mobileNo: field.mobileNo,
        aadharId: field.aadharId,
      };

      addEmployee(data);
    }
  };

  const handelCancel = () => {
    navigate("/employee");
  };

  return (
    <div className="emp-details">
      <form className="emp-form">
        <div>Enter Employee Details</div>
        <br></br>
        <div
          className="name"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="firstName"
            label="firstName"
            variant="outlined"
            size="small"
            className="form-detail"
            autoFocus
            value={field.firstName}
            helperText={field.firstNameError ? "firstName is required" : " "}
            error={field.firstNameError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="lastName"
            label="lastName"
            variant="outlined"
            size="small"
            className="form-detail"
            value={field.lastName}
            helperText={field.lastNameError ? "lastName is required" : " "}
            error={field.lastNameError}
            onChange={(e) => {
              changeField(e);
            }}
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
            label="mobileNo"
            variant="outlined"
            size="small"
            className="form-detail"
            value={field.mobileNo}
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
            label="aadharId"
            variant="outlined"
            size="small"
            className="form-detail"
            value={field.aadharId}
            helperText={field.aadharIdError ? "aadharId is required" : " "}
            error={field.aadharIdError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>

        <div
          className="name"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="date_Of_Joining"
            label="date_Of_Joining"
            variant="outlined"
            size="small"
            className=" "
            fullWidth
            value={field.date_Of_Joining}
            helperText={
              field.date_Of_JoiningError
                ? " date_Of_Joining is required"
                : "*eg:2010-10-10"
            }
            error={field.date_Of_JoiningError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="department_Id"
            label="department_Id"
            variant="outlined"
            size="small"
            className="form-detail"
            value={field.department_Id}
            helperText={
              field.department_IdError ? " department_Id is required" : " "
            }
            error={field.department_IdError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>

        <div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            name="email"
            label="email"
            variant="outlined"
            size="small"
            className="form-detail"
            value={field.email}
            helperText={field.emailError ? "email is required" : " "}
            error={field.emailError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>

        <div
          className="name"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="address"
            label="address"
            variant="outlined"
            size="small"
            className="form-detail"
            value={field.address}
            helperText={field.addressError ? " address is required" : " "}
            error={field.addressError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="role_Id"
            label="role_Id"
            variant="outlined"
            size="small"
            className="form-detail"
            value={field.role_Id}
            helperText={field.role_IdError ? "role_Id is required" : " "}
            error={field.role_IdError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>

        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          name="password"
          label="password"
          variant="outlined"
          size="small"
          className="form-detail"
          value={field.password}
          helperText={
            field.passwordError
              ? "password is required"
              : "*password size must be greater than 4 and has atleast one number"
          }
          error={field.passwordError}
          onChange={(e) => {
            changeField(e);
          }}
        ></TextField>

        <Button
          onClick={next}
          style={{ backgroundColor: "#3371B5", color: "white" }}
        >
          Save
        </Button>
        <Button
          onClick={handelCancel}
          style={{ backgroundColor: "white", color: "grey" }}
        >
          Back
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
