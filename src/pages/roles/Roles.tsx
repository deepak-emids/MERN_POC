import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.jpg";
import service from "../../services/roleService/roleService";
import Table from "../../components/table/Tables";
import { useSelector, useDispatch } from "react-redux";

import "./roles.scss";
// import { fetchRole } from "../../store/actions";

function Roles() {
  const dispatch = useDispatch();

  const [roles, setRoles] = React.useState([]);

  React.useEffect(() => {
    handleGetAllRoles();
  }, []);

  const handleGetAllRoles = () => {
    service
      .getAllRole()
      .then((res) => {
        setRoles(res.data.data);
        // dispatch(fetchRole(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="role">
      {roles.length ? (
        <div className="table">
          <Table data={roles} refresh={() => handleGetAllRoles()} mode="role" />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Roles;
