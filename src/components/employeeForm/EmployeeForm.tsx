import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/employeeService/employeeService";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";
import { useNavigate } from "react-router-dom";
import { EmployeeData } from "../../models/model";
import Dropdown from "../../navbar/Dropdown";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "../snackbar/Snackbar";
import DatePicker from "../date/DatePicker";

import "./employeeForm.scss";

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
  const [snackbar, setSnackbar] = React.useState(false);
  const [disableSave, setDisableSave] = React.useState(false);

  let departmentList: [{ id: number; departmentName: string }] = useSelector(
    (state: any) => state.getDepartment.department
  );

  let roleList: [{ id: number; roleName: string }] = useSelector(
    (state: any) => state.getRole.role
  );

  const navigate = useNavigate();

  const addEmployee = (data: EmployeeData) => {
    service
      .addEmployee(data)
      .then((res) => {
        setSnackbar(true);
        setDisableSave(true);

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

  const handleDate = (date: string) => {
    console.log(date);
    field.date_Of_Joining = date;
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
    console.log(field, "fie");
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

  const showSnackbar = () => {
    let show: any = "";
    if (snackbar) {
      show = <Snackbar message="Employee Added Successfully" />;
      setTimeout(() => {
        setSnackbar(false);
      }, 2000);
    }

    return show;
  };

  return (
    <div className="emp-details">
      <form className="emp-form">
        <div>Enter Employee Details</div>
        <br></br>
        <div>{showSnackbar()}</div>

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
          <DatePicker handleDate={handleDate} />
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="password"
            label="password"
            variant="outlined"
            type="password"
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
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="department_Id"
              label="Department"
              onChange={(e) => {
                changeField(e);
              }}
            >
              {departmentList.map(
                (key: { id: number; departmentName: string }) => (
                  <MenuItem value={key.id}>{key.departmentName}</MenuItem>
                )
              )}
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="role_Id"
              label="Role"
              onChange={(e) => {
                changeField(e);
              }}
            >
              {roleList.map((key: { id: number; roleName: string }) => (
                <MenuItem value={key.id}>{key.roleName}</MenuItem>
              ))}
            </Select>
          </FormControl>
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

        <TextField
          id="outlined-basic"
          name="address"
          label="address"
          variant="outlined"
          size="small"
          fullWidth
          className="form-detail"
          value={field.address}
          helperText={field.addressError ? " address is required" : " "}
          error={field.addressError}
          onChange={(e) => {
            changeField(e);
          }}
        ></TextField>

        <Button onClick={next} variant="contained" disabled={disableSave}>
          Save
        </Button>
        <Button onClick={handelCancel} variant="outlined">
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
