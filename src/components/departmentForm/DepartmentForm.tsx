import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/depertmentService/departmentService";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";
import { useNavigate } from "react-router-dom";
// import Snackbar from "../../components/snackbar/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import {
  addDepartment,
  getDepartments,
} from "../../store/actions/DepartmentActions";
import "./departmentForm.scss";

export default function DepartmentForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [disableSave, setDisableSave] = React.useState(false);

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

      dispatch(addDepartment(data));
      dispatch(getDepartments());
    }
  };

  const handelCancel = () => {
    navigate("/department");
  };

  return (
    <div className="dept-details">
      <form className="dept-form">
        <div>Enter Department Name</div>

        <TextField
          id="outlined-basic"
          name="departmentName"
          label="Department Name"
          variant="outlined"
          size="small"
          fullWidth
          className="form-detail"
          helperText={
            field.departmentNameError ? " departmentName is required" : " "
          }
          error={field.departmentNameError}
          onChange={(e) => {
            changeField(e);
          }}
        ></TextField>

        <div className="dept-form-button">
          <Button onClick={next} variant="contained" disabled={disableSave}>
            Save
          </Button>
          <Button onClick={handelCancel} variant="outlined">
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
