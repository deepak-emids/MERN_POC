import service from "./axios";

let url = "http://localhost:9000";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

const Service = {
  //signup and signin
  Signup: (data) => {
    return service.postMethod(`${url}/users/login`, data);
  },

  Signin: (data) => {
    return service.postMethod(`${url}/users/login`, data);
  },

  //------------------------------------employee

  //new emp data
  addEmployee: (data) => {
    return service.postMethod(`${url}/employee`, data, header);
  },

  //get single emps
  getAllEmployee: () => {
    return service.getMethod(`${url}/employee`, header);
  },

  //get project emps
  getEmployee: (data) => {
    console.log(data);
    return service.getMethod(`${url}/employee/${data}`, header);
  },

  //update dept
  updateEmployee: (id, data) => {
    return service.putMethod(`${url}/employee/${id}`, data, header);
  },

  //update dept
  deleteEmployee: (data) => {
    return service.deleteMethod(`${url}/employee/${data}`, header);
  },

  //------------------------------------dept

  //new dept
  addDepartment: (data) => {
    return service.postMethod(`${url}/department`, data, header);
  },

  //get dept
  getAllDepartment: () => {
    return service.getMethod(`${url}/department`, header);
  },

  //get field dept
  getDepartment: (data) => {
    return service.getMethod(`${url}/department/${data}`, header);
  },

  //update dept
  updateDepartment: (id, data) => {
    return service.putMethod(`${url}/department/${id}`, header);
  },

  //delete dept
  deleteDepartment: (data) => {
    return service.deleteMethod(`${url}/department/${data}`, header);
  },
  //------------------------------------roles

  //new Role
  addRole: (data) => {
    return service.postMethod(`${url}/role`, data, header);
  },

  //get Role
  getAllRole: () => {
    return service.getMethod(`${url}/role`, header);
  },

  //get field Role
  getRole: (data) => {
    return service.getMethod(`${url}/role/${data}`, header);
  },

  //update Role
  updateRole: (id, data) => {
    return service.putMethod(`${url}/role/${id}`, header);
  },

  //delete Role
  deleteRole: (data) => {
    return service.deleteMethod(`${url}/role/${data}`, header);
  },
};
export default Service;
