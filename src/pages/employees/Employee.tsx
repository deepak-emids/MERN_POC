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
        console.log(res.data.data, "employee page employee in get");
        setEmp(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(emp, "emp in employee");

  return (
    <div className="employee">
      {emp.length ? (
        <div className="table">
          <Table data={emp} refresh={handleGetAllEmployees} mode="employee" />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Employee;
