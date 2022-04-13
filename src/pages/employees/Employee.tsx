import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.jpg";
import service from "../../services/employeeService/employeeService";
import Table from "../../components/table/Tables";
import { useSelector, useDispatch } from "react-redux";
import { EmployeeData } from "../../models/model";

import "./employee.scss";
import getEmployee from "../../store/reducer/getEmployee";
// import { fetchEmployee } from "../../store/actions";

function Employee() {
  const employee = useSelector((state: any) => state.getEmployee.employee);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  React.useEffect(() => {
    handleGetAllEmployees();
  }, []);

  const handleGetAllEmployees = () => {
    service
      .getAllEmployee()
      .then((res) => {
        // dispatch(fetchEmployee(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="employee">
      {employee.length ? (
        <div className="table">
          <Table
            data={employee}
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
