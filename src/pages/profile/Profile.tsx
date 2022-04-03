import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/services";
import TextField from "@mui/material/TextField";
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
    gender: "",
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
        console.log(res);
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

    firstNameError: false,
    lastNameError: false,
    emailError: false,
    date_Of_JoiningError: false,
    addressError: false,
    passwordError: false,
    department_IdError: false,
    mobileNoError: false,
    aadharIdError: false,
    role_IdError: false,
  });

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
    let date_Of_JoiningError = field.date_Of_Joining === "" ? true : false;
    let addressError = field.address === "" ? true : false;
    let passwordError = field.password === "" ? true : false;
    let department_IdError = field.department_Id === "" ? true : false;
    let mobileNoError = field.mobileNo === "" ? true : false;
    let aadharIdError = field.aadharId === "" ? true : false;
    let role_IdError = field.role_Id === "" ? true : false;

    setField((previousvalues: any) => {
      return {
        ...previousvalues,
        firstNameError: firstNameError,
        lastNameError: lastNameError,
        emailError: emailError,

        date_Of_JoiningError: date_Of_JoiningError,
        addressError: addressError,
        passwordError: passwordError,
        department_IdError: department_IdError,
        mobileNoError: mobileNoError,
        aadharIdError: aadharIdError,
        role_Id: role_IdError,
      };
    });
    return (isError =
      field.emailError ||
      field.firstNameError ||
      field.lastNameError ||
      field.date_Of_JoiningError ||
      field.addressError ||
      field.department_IdError ||
      field.passwordError ||
      field.mobileNoError ||
      field.aadharIdError ||
      field.role_IdError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        employeeId: null,
        firstName: field.firstName,
        lastName: field.lastName,
        email: field.email,

        date_Of_Joining: field.date_Of_Joining,
        address: field.address,
        department_Id: field.department_Id,
        password: field.password,
        mobileNo: field.mobileNo,
        aadharId: field.aadharId,
        role_Id: field.role_Id,
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
            name="firstName"
            value={emp.firstName}
            variant="standard"
            size="small"
            className="form-detail"
            autoFocus
            helperText={field.firstNameError ? "firstName is required" : " "}
            error={field.firstNameError}
            onChange={(e) => {
              changeField(e);
            }}
            inputProps={{ readOnly: true }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="lastName"
            value={emp.lastName}
            variant="standard"
            size="small"
            className="form-detail"
            helperText={field.lastNameError ? "lastName is required" : " "}
            error={field.lastNameError}
            onChange={(e) => {
              changeField(e);
            }}
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
            value={emp.mobileNo}
            variant="standard"
            size="small"
            className="form-detail"
            autoFocus
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
            value={emp.aadharId}
            variant="standard"
            size="small"
            className="form-detail"
            helperText={field.aadharIdError ? "aadharId is required" : " "}
            error={field.aadharIdError}
            onChange={(e) => {
              changeField(e);
            }}
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
            value={emp.department_Id}
            variant="standard"
            size="small"
            className="form-detail"
            helperText={
              field.department_IdError ? "department_Id is required" : " "
            }
            error={field.department_IdError}
            onChange={(e) => {
              changeField(e);
            }}
            inputProps={{ readOnly: true }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="date_Of_Joining"
            value={emp.date_Of_Joining}
            variant="standard"
            size="small"
            className=" "
            helperText={
              field.date_Of_JoiningError ? " date_Of_Joining is required" : " "
            }
            error={field.date_Of_JoiningError}
            onChange={(e) => {
              changeField(e);
            }}
            inputProps={{ readOnly: true }}
          ></TextField>
        </div>

        <div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            name="email"
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
    </div>
  );
}
