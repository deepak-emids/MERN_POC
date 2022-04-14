import React from "react";
import back from "../../assets/back.jpg";
import service from "../../services/depertmentService/departmentService";
import Table from "../../components/table/Tables";
import { useSelector, useDispatch } from "react-redux";

import "./department.scss";

function Department() {
  const dispatch = useDispatch();

  const departments = useSelector((state: any) => state.Department.departments);

  React.useEffect(() => {}, []);

  return (
    <div className="department">
      {departments.length ? (
        <div className="table">
          <Table data={departments} refresh={() => {}} mode="department" />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Department;
