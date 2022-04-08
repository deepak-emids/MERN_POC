import service from "../axios";

let url = "http://localhost:9000";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

const Service = {
  Signin: (data: { email: string; password: string }) => {
    return service.postMethod(`${url}/users/login`, data);
  },
};
export default Service;
