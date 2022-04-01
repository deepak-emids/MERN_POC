import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.jpg";
import head from "../../assets/table.jpg";
import service from "../../services/services";
import Table from "../../components/table/Tables";

import "./department.scss";

function Department() {
  const navigate = useNavigate();
  const [department, setDepartment] = React.useState([]);

  React.useEffect(() => {
    handleGetAllDepartment();
  }, []);

  const handleGetAllDepartment = () => {
    service
      .getAllDepartment()
      .then((res) => {
        console.log(res.data.data, "department in get");
        setDepartment(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHome = () => {
    navigate("/");
  };

  console.log(department, "emp in employee");

  return (
    <div className="employee">
      {department.length ? (
        <div>
          <Table data={department} refresh={handleGetAllDepartment} />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Department;
