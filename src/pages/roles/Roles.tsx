import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.jpg";
import service from "../../services/services";
import Table from "../../components/table/Tables";

import "./roles.scss";

function Roles() {
  const [roles, setRoles] = React.useState([]);

  React.useEffect(() => {
    handleGetAllRoles();
  }, []);

  const handleGetAllRoles = () => {
    service
      .getAllRole()
      .then((res) => {
        setRoles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="role">
      {roles.length ? (
        <div className="table">
          
            
          <Table data={roles} refresh={() => handleGetAllRoles()}   mode="role" />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Roles;
