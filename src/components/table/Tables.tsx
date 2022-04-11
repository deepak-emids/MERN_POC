import Button from "@mui/material/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import employeeService from "../../services/employeeService/employeeService";
import departmentService from "../../services/depertmentService/departmentService";
import roleService from "../../services/roleService/roleService";
import Snackbar from "../../components/snackbar/Snackbar";

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
  //------------------------------------------------Methods
  const [snackbar, setSnackbar] = React.useState(false);

  //Employee Methods
  const updateEmployee = (id: number, data: {}) => {
    employeeService
      .updateEmployee(id, data)
      .then((res) => {
        setSnackbar(true);

        props.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEmployee = (id: number) => {
    employeeService
      .deleteEmployee(id)
      .then((res: {}) => {
        setSnackbar(true);

        props.refresh();
      })
      .catch((err: {}) => {
        console.log(err);
      });
  };

  //department Methods
  const updateDepartment = (id: number, data: { departmentName: string }) => {
    departmentService
      .updateDepartment(id, data)
      .then((res) => {
        setSnackbar(true);

        props.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteDepartment = (id: number) => {
    departmentService
      .deleteDepartment(id)
      .then((res: {}) => {
        setSnackbar(true);

        props.refresh();
      })
      .catch((err: {}) => {
        console.log(err);
      });
  };

  //role Methods
  const updateRole = (id: number, data: { roleName: string }) => {
    roleService
      .updateRole(id, data)
      .then((res) => {
        setSnackbar(true);

        props.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRole = (id: number) => {
    roleService
      .deleteRole(id)
      .then((res: {}) => {
        setSnackbar(true);

        props.refresh();
      })
      .catch((err: {}) => {
        console.log(err);
      });
  };

  const classes = useStyles();

  React.useEffect(() => {
    props.refresh();
  }, []);

  //Methods
  const navigate = useNavigate();

  const handleDelete = (
    event: any,
    cellValues: { row: { id: number; field: string; value: any } }
  ) => {
    if (props.mode == "department") {
      deleteDepartment(cellValues.row.id);
    } else if (props.mode == "employee") {
      deleteEmployee(cellValues.row.id);
    } else if (props.mode == "role") {
      deleteRole(cellValues.row.id);
    } else console.log("undefined mode");
  };

  const handleCommit = async (i: any) => {
    let updatedData: any = {
      [i.field]: i.value,
    };
    if (props.mode == "employee") {
      updateEmployee(i.id, updatedData);
    } else if (props.mode == "department") {
      updateDepartment(i.id, updatedData);
    } else if (props.mode == "role") {
      updateRole(i.id, updatedData);
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

  //row data
  const rows = props.data;

  //column data
  const columns: GridColDef[] = Object.keys(props.data[0]).map((key, id) => {
    return {
      field: key,
      headerName: key,
      width: 140,
      editable: true,
    };
  });

  columns.unshift({
    field: "Delete",
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
