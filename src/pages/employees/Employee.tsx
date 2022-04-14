import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.jpg";
import service from "../../services/employeeService/employeeService";
import Table from "../../components/table/Tables";
import { useSelector, useDispatch } from "react-redux";
import { EmployeeData } from "../../models/model";

import "./employee.scss";

function Employee() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const employees = useSelector((state: any) => state.Employee.employees);

  return (
    <div className="employee">
      {employees.length ? (
        <div className="table">
          <Table data={employees} refresh={() => {}} mode="employee" />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Employee;
