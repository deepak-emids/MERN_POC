import Button from "@mui/material/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import employeeService from "../../services/employeeService/employeeService";
import departmentService from "../../services/depertmentService/departmentService";
import roleService from "../../services/roleService/roleService";

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

  //Employee Methods

  const getEmployee = (id: number) => {
    employeeService
      .getEmployee(id)
      .then((res: {}) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const deleteEmployee = (id: number) => {
    employeeService
      .deleteEmployee(id)
      .then((res: {}) => {
        console.log(res);
      })
      .catch((err: {}) => {
        console.log(err);
      });
  };

  //department Methods

  const getDepartment = (id: number) => {
    departmentService
      .getDepartment(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateDepartment = (id: number, data: { departmentName: string }) => {
    departmentService
      .updateDepartment(id, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteDepartment = (id: number) => {
    departmentService
      .deleteDepartment(id)
      .then((res: {}) => {
        console.log(res);
      })
      .catch((err: {}) => {
        console.log(err);
      });
  };

  const updateEmployee = (id: number, data: {}) => {
    console.log(data);
    employeeService
      .updateEmployee(id, data)
      .then((res) => {
        console.log(res);
        props.refresh();
      })
      .catch((err) => {
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
      props.refresh();
    } else if (props.mode == "employee") {
      deleteEmployee(cellValues.row.id);
      props.refresh();
    } else console.log("undefined mode");
  };

  const handleCommit = async (i: any) => {
    let updatedData: any = {
      [i.field]: i.value,
    };

    if (props.mode == "employee") {
      updateEmployee(i.id, updatedData);
      props.refresh();
    } else if (props.mode == "department") {
      updateDepartment(i.id, updatedData);
      props.refresh();
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
