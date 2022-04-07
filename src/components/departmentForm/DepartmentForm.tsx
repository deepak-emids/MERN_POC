import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/depertmentService/departmentService";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";
import { useNavigate } from "react-router-dom";

import "./departmentForm.scss";

export default function DepartmentForm() {
  const navigate = useNavigate();

  const [field, setField] = React.useState({
    departmentName: "",
    departmentNameError: false,
  });

  const changeField = (e: any) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    let departmentNameError = field.departmentName === "" ? true : false;

    setField((previousvalues) => {
      return {
        ...previousvalues,
        departmentNameError: departmentNameError,
      };
    });

    return (isError = field.departmentNameError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        departmentName: field.departmentName,
      };

      service
        .addDepartment(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handelBack = () => {
    navigate("/department");
  };

  return (
    <div className="dept-details">
      <form className="dept-form">
        <div>Enter Department Name</div>

        <TextField
          style={{ width: "45%" }}
          id="outlined-basic"
          name="departmentName"
          label="Department Name"
          variant="outlined"
          size="small"
          className="form-detail"
          helperText={
            field.departmentNameError ? " departmentName is required" : " "
          }
          error={field.departmentNameError}
          onChange={(e) => {
            changeField(e);
          }}
        ></TextField>

        <div className="form-button">
          <Button
            onClick={next}
            style={{ backgroundColor: "#3371B5", color: "white" }}
          >
            Save
          </Button>
          <Button
            onClick={handelBack}
            style={{ backgroundColor: "white", color: "grey" }}
          >
            Back
          </Button>
        </div>
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
