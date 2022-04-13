import React from "react";
import back from "../../assets/back.jpg";
import service from "../../services/depertmentService/departmentService";
import Table from "../../components/table/Tables";
import { useSelector, useDispatch } from "react-redux";

import "./department.scss";
// import { fetchDepartment } from "../../store/actions";

function Department() {
  const [department, setDepartment] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    handleGetAllDepartment();
  }, []);

  const handleGetAllDepartment = () => {
    service
      .getAllDepartment()
      .then((res) => {
        setDepartment(res.data.data);
        // dispatch(fetchDepartment(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="department">
      {department.length ? (
        <div className="table">
          <Table
            data={department}
            refresh={handleGetAllDepartment}
            mode="department"
          />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Department;
