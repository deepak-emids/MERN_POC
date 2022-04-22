import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/roleService/roleService";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";
// import Snackbar from "../../components/snackbar/Snackbar";
import { useNavigate } from "react-router-dom";
import { addRole, getRoles } from "../../store/actions/RoleActions";
import { useSelector, useDispatch } from "react-redux";

import "./roleForm.scss";
import { Navigate } from "react-router";

export default function RoleForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [disableSave, setDisableSave] = React.useState(false);

  const [field, setField] = React.useState({
    roleName: "",
    roleNameError: false,
  });

  const changeField = (e: any) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    let roleNameError = field.roleName === "" ? true : false;

    setField((previousvalues) => {
      return {
        ...previousvalues,
        roleNameError: roleNameError,
      };
    });

    return (isError = field.roleNameError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        roleName: field.roleName,
      };
      dispatch(addRole(data));
      dispatch(getRoles());
    }
  };

  const handelCancel = () => {
    navigate("/role");
  };

  return (
    <div className="role-details">
      <form className="role-form">
        <div>Enter Role Name</div>

        <TextField
          id="outlined-basic"
          name="roleName"
          label="Role Name"
          variant="outlined"
          size="small"
          fullWidth
          className="form-detail"
          helperText={field.roleNameError ? " roleName is required" : " "}
          error={field.roleNameError}
          onChange={(e) => {
            changeField(e);
          }}
        ></TextField>

        <div className="form-button">
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
