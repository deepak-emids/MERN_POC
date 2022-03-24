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
    return service.postMethod(`${url}/signup`, data);
  },

  Signin: (data) => {
    return service.postMethod(`${url}/users/login`, data);
  },

  //------------------------------------employee

  //new emp data
  newEmpData: (data) => {
    return service.postMethod(`${url}/data`, data, header);
  },

  //new work data
  newEmpWork: (data) => {
    return service.postMethod(`${url}/work`, data, header);
  },

  //get single emps
  getEmpData: () => {
    return service.getMethod(`${url}/data`, header);
  },

  //get dept emps
  getEmpWork: () => {
    return service.getMethod(`${url}/work`, header);
  },

  //get project emps
  getEmployee: (data) => {
    return service.getMethod(`${url}/employee/${data}`, header);
  },

  //get field emps
  getEmployee: (data) => {
    return service.getMethod(`${url}/employee/${data}`, header);
  },

  //update emp
  updateEmployee: (data) => {
    return service.putMethod(`${url}/employee/${data}`, header);
  },

  //delete emp
  deleteEmployee: (data) => {
    return service.deleteMethod(`${url}/employee/${data}`, header);
  },

  //------------------------------------dept

  //new dept
  newDept: (data) => {
    return service.postMethod(`${url}/dept`, data, header);
  },

  //get dept
  getDept: (data) => {
    return service.getMethod(`${url}/dept/${data}`, header);
  },

  //get field dept
  getDept: (data) => {
    return service.getMethod(`${url}/dept/${data}`, header);
  },

  //update dept
  updateDept: (data) => {
    return service.putMethod(`${url}/dept/${data}`, header);
  },

  //delete dept
  deleteDept: (data) => {
    return service.deleteMethod(`${url}/dept/${data}`, header);
  },

  //------------------------------------per

  //get permission
  getPer: (data) => {
    return service.getMethod(`${url}/permission/${data}`, header);
  },
};
export default Service;
