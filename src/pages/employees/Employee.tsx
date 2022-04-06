import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.jpg";
import head from "../../assets/table.jpg";
import service from "../../services/services";
import Table from "../../components/table/Tables";

import "./employee.scss";

function Employee() {
  const navigate = useNavigate();
  const [emp, setEmp] = React.useState([]);

  React.useEffect(() => {
    handleGetAllEmployees();
  }, []);

  const handleGetAllEmployees = () => {
    service
      .getAllEmployee()
      .then((res) => {
        setEmp(res.data.data);
        console.log("refresh");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="employee">
      {emp.length ? (
        <div className="table">
          <Table
            data={emp}
            refresh={() => handleGetAllEmployees()}
            mode="employee"
          />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Employee;
