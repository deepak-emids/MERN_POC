import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/services";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";

import "./departmentForm.scss";

export default function CandidateDetails() {
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

      console.log(data, "data");
      // addCandidateDetails api
    }
  };

  const handelCancel = () => {};

  return (
    <div className="emp-details">
      <form className="emp-form">
        <div>Enter Employee Details</div>
        <br></br>

        <TextField
          style={{ width: "45%" }}
          id="outlined-basic"
          name="departmentName"
          label="departmentName"
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

        <Button
          onClick={next}
          style={{ backgroundColor: "#3371B5", color: "white" }}
        >
          Continue
        </Button>
        <Button
          onClick={handelCancel}
          style={{ backgroundColor: "white", color: "grey" }}
        >
          Cancel
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
