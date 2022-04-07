import service from "../axios";

let url = "http://34.228.170.203:9000";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

const Service = {
  //new Role
  addRole: (data: { roleName: string }) => {
    return service.postMethod(`${url}/role`, data, header);
  },

  //get Role
  getAllRole: () => {
    return service.getMethod(`${url}/role`, header);
  },

  //get field Role
  getRole: (data: number) => {
    return service.getMethod(`${url}/role/${data}`, header);
  },

  //update Role
  updateRole: (id: number, data: { roleName: string }) => {
    return service.putMethod(`${url}/role/${id}`, data, header);
  },

  //delete Role
  deleteRole: (data: number) => {
    return service.deleteMethod(`${url}/role/${data}`, header);
  },
};
export default Service;
