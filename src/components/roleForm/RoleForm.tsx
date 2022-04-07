import React from "react";
import Button from "@mui/material/Button";
import service from "../../services/services";
import TextField from "@mui/material/TextField";
import back from "../../assets/back.jpg";

import "./roleForm.scss";

export default function RoleForm() {
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handelCancel = () => {};

  return (
    <div className="role-details">
      <form className="role-form">
        <div>Enter Role Name</div>

        <TextField
          style={{ width: "45%" }}
          id="outlined-basic"
          name="roleName"
          label="Role Name"
          variant="outlined"
          size="small"
          className="form-detail"
          helperText={field.roleNameError ? " roleName is required" : " "}
          error={field.roleNameError}
          onChange={(e) => {
            changeField(e);
          }}
        ></TextField>

        <div className="form-button">
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
