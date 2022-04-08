import service from "../axios";
import * as model from "../../models/model";
let url = "http://localhost:9000";

const header: any = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

const Service = {
  //new emp data
  addEmployee: (data: model.EmployeeData) => {
    return service.postMethod(`${url}/employee`, data, header);
  },

  //get single emps
  getAllEmployee: () => {
    return service.getMethod(`${url}/employee`, header);
  },

  //get project emps
  getEmployee: (data: number) => {
    return service.getMethod(`${url}/employee/${data}`, header);
  },

  //update dept
  updateEmployee: (id: number, data: any) => {
    return service.putMethod(`${url}/employee/${id}`, data, header);
  },

  //update dept
  deleteEmployee: (data: number) => {
    return service.deleteMethod(`${url}/employee/${data}`, header);
  },
};
export default Service;
