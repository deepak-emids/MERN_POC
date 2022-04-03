import Button from "@mui/material/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import service from "../../services/services";
import "./tables.scss";

import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
);

//------------------------------------------------Methods

//Employee Methods

const addEmployee = (details: object) => {
  console.log(details);
  service
    .addEmployee(details)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getEmployee = (id: number) => {
  service
    .getEmployee(id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateEmployee = (id: number, data: {}) => {
  service
    .updateEmployee(id, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteEmployee = (id: number) => {
  service
    .deleteEmployee(id)
    .then((res: {}) => {
      console.log(res);
    })
    .catch((err: {}) => {
      console.log(err);
    });
};

//department Methods

const addDepartment = (details: {}) => {
  console.log(details);
  service
    .addDepartment(details)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDepartment = (id: number) => {
  service
    .getDepartment(id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateDepartment = (id: number, data: {}) => {
  service
    .updateDepartment(id, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteDepartment = (id: number) => {
  service
    .deleteDepartment(id)
    .then((res: {}) => {
      console.log(res);
    })
    .catch((err: {}) => {
      console.log(err);
    });
};

//------------------------------------------------Methods

const handleProfile = (
  event: any,
  cellValues: { row: { id: number; field: string; value: any } }
) => {
  console.log(cellValues.row);
};

//default methods
const handleCellClick = (param: any, event: any) => {
  event.stopPropagation();
};

const handleRowClick = (param: any, event: any) => {
  event.stopPropagation();
};

export default function DataGridDemo(props: any) {
  const classes = useStyles();

  React.useEffect(() => {
    props.refresh();
  }, []);

  //Methods
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleDelete = (
    event: any,
    cellValues: { row: { id: number; field: string; value: any } }
  ) => {
    console.log(cellValues.row);

    if (props.mode == "department") {
      deleteDepartment(cellValues.row.id);
      props.refresh();
    } else if (props.mode == "employee") {
      deleteEmployee(cellValues.row.id);
      props.refresh();
    } else console.log("undefined mode");
  };

  const handleCommit = (i: any) => {
    console.log(i);

    let updatedData: {} = {
      [i.field]: i.value,
    };

    console.log(updatedData);

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
    navigate("/addForm");
  };

  //row data
  const rows = props.data;
  console.log(rows, "rows");

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
          Delete
        </Button>
      );
    },
  });

  return (
    <div className="grid">
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleAdd()}
        style={{
          color: "white",
          background: "#5cdb5c",
        }}
      >
        Add
      </Button>

      <Button
        className="dataButton"
        onClick={() => handleBack()}
        style={{
          color: "white",
          background: "#1a73e8",
        }}
      >
        Back To Dashboard
      </Button>
      <DataGrid
        style={{ backgroundColor: "white", height: 550 }}
        onCellEditCommit={(e) => handleCommit(e)}
        rowHeight={50}
        className={classes.root}
        rows={rows}
        getRowId={(row) => row.id}
        columns={columns}
        pageSize={8}
        // checkboxSelection
        rowsPerPageOptions={[5]}
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
