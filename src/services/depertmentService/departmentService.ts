import service from "../axios";

let url = "http://localhost:9000";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

const Service = {
  //new dept
  addDepartment: (data: { departmentName: string }) => {
    return service.postMethod(`${url}/department`, data, header);
  },

  //get dept
  getAllDepartment: () => {
    return service.getMethod(`${url}/department`, header);
  },

  //get field dept
  getDepartment: (data: number) => {
    return service.getMethod(`${url}/department/${data}`, header);
  },

  //update dept
  updateDepartment: (id: number, data: any) => {
    console.log(id, data);
    return service.putMethod(`${url}/department/${id}`, data, header);
  },

  //delete dept
  deleteDepartment: (data: number) => {
    return service.deleteMethod(`${url}/department/${data}`, header);
  },
};
export default Service;
