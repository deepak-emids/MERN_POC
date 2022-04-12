import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/roleService/roleService";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";
import Snackbar from "../../components/snackbar/Snackbar";
import { useNavigate } from "react-router-dom";

import "./roleForm.scss";
import { Navigate } from "react-router";

export default function RoleForm() {
  const navigate = useNavigate();
  const [disableSave, setDisableSave] = React.useState(false);

  const [snackbar, setSnackbar] = React.useState(false);

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

      service
        .addRole(data)
        .then((res) => {
          console.log(res);
          setSnackbar(true);
          setDisableSave(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handelCancel = () => {
    navigate("/role");
  };

  const showSnackbar = () => {
    let show: any = "";
    if (snackbar) {
      show = <Snackbar message="Role Added Successfully" />;
      setTimeout(() => {
        setSnackbar(false);
      }, 2000);
    }

    return show;
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
      <div>{showSnackbar()}</div>

      <img
        className="back"
        src={back}
        alt="this is logo"
        data-testid="profile1"
      ></img>
    </div>
  );
}
