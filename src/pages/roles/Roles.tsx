import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.jpg";
import service from "../../services/roleService/roleService";
import Table from "../../components/table/Tables";
import { useSelector, useDispatch } from "react-redux";

import "./roles.scss";

function Roles() {
  const dispatch = useDispatch();

  const roles = useSelector((state: any) => state.Role.roles);

  React.useEffect(() => {}, []);

  return (
    <div className="role">
      {roles.length ? (
        <div className="table">
          <Table data={roles} refresh={() => {}} mode="role" />
        </div>
      ) : null}

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Roles;
