import React from "react";
import back from "../../assets/back.jpg";
import service from "../../services/services";
import Table from "../../components/table/Tables";

import "./department.scss";

function Department() {
  const [department, setDepartment] = React.useState([]);

  React.useEffect(() => {
    handleGetAllDepartment();
  }, []);

  const handleGetAllDepartment = () => {
    service
      .getAllDepartment()
      .then((res) => {
        setDepartment(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="department">
      {department.length ? (
        <div className="table">
          <Table data={department} refresh={handleGetAllDepartment} />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Department;
