import Button from "@mui/material/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Snackbar from "../../components/snackbar/Snackbar";
import { employee_fields } from "../tablefields/Employee";
import { department_fields } from "../tablefields/Department";
import { role_fields } from "../tablefields/Role";
import {
  updateEmployee,
  deleteEmployee,
  getEmployees,
} from "../../store/actions/EmployeeActions";
import {
  deleteDepartment,
  getDepartments,
  updateDepartment,
} from "../../store/actions/DepartmentActions";
import {
  deleteRole,
  getRoles,
  updateRole,
} from "../../store/actions/RoleActions";
import { useSelector, useDispatch } from "react-redux";

import "./tables.scss";

import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
);

//default methods
const handleCellClick = (param: any, event: any) => {
  event.stopPropagation();
};

const handleRowClick = (param: any, event: any) => {
  event.stopPropagation();
};

export default function DataGridDemo(props: any) {
  const dispatch = useDispatch();

  const [snackbar, setSnackbar] = React.useState(false);

  const classes = useStyles();

  const navigate = useNavigate();

  const handleDelete = (
    event: any,
    cellValues: { row: { id: number; field: string; value: any } }
  ) => {
    if (props.mode == "department") {
      dispatch(deleteDepartment(cellValues.row.id));
      dispatch(getDepartments());
    } else if (props.mode == "employee") {
      dispatch(deleteEmployee(cellValues.row.id));
      dispatch(getEmployees());
    } else if (props.mode == "role") {
      dispatch(deleteRole(cellValues.row.id));
      dispatch(getRoles());
    } else console.log("undefined mode");
  };

  const handleCommit = async (i: any) => {
    let updatedData: any = {
      [i.field]: i.value,
    };
    if (props.mode == "employee") {
      dispatch(updateEmployee(i.id, updatedData));
      dispatch(getEmployees());
    } else if (props.mode == "department") {
      dispatch(updateDepartment(i.id, updatedData));
      dispatch(getDepartments());
    } else if (props.mode == "role") {
      dispatch(updateRole(i.id, updatedData));
      dispatch(getRoles());
    } else {
      console.log("mode undefined");
    }
  };

  const handleAdd = () => {
    if (props.mode == "employee") {
      navigate("/addEmployee");
    } else if (props.mode == "department") {
      navigate("/departmentForm");
    } else if (props.mode == "role") {
      navigate("/roleForm");
    } else {
      console.log("mode undefined");
    }
  };

  let tableField: { field: string; headerName: string }[];

  if (props.mode == "employee") {
    tableField = employee_fields;
  } else if (props.mode == "department") {
    tableField = department_fields;
  } else if (props.mode == "role") {
    tableField = role_fields;
  } else {
    tableField = [];
  }

  //row data
  const rows = props.data;

  //column data
  const columns: GridColDef[] = tableField.map((key: any) => {
    return {
      field: key.field,
      headerName: key.headerName,
      width: 140,
      editable: true,
    };
  });

  columns.unshift({
    field: "Action",
    width: 125,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => handleDelete(event, cellValues)}
          style={{
            color: "white",
            background: "#ff0021",
          }}
        >
          DELETE
        </Button>
      );
    },
  });

  const showSnackbar = () => {
    let show: any = "";
    if (snackbar) {
      show = <Snackbar message="Details Updated Sucessfully" />;
      setTimeout(() => {
        setSnackbar(false);
      }, 2000);
    }

    return show;
  };

  return (
    <div className="grid">
      <div className="table-button">
        <Button
          className="table-button1"
          variant="contained"
          color="primary"
          onClick={() => handleAdd()}
          style={{
            color: "white",
            background: "#5cdb5c",
          }}
        >
          ADD
        </Button>
      </div>
      <div>{showSnackbar()}</div>

      <DataGrid
        style={{ backgroundColor: "white", height: 550 }}
        onCellEditCommit={(e) => handleCommit(e)}
        rowHeight={50}
        className={classes.root}
        rows={rows}
        getRowId={(row) => row.id}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
        data-testid="datagrid"
      />
    </div>
  );
}
