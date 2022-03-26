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
};
export default Service;
