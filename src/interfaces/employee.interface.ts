
export interface IEMP {
    employeeId: Number;
    email: String;
    password: String;
    permissionId: String;
    education: String;
    experiance: Number;
    department: String;
    role: String;
    designation: String;
    reporting_lead: String;
    package: Number;
    joining: Date;
  }
  
  export interface IEMPData {
    employeeId: Number;
    firstName: String;
    lastName: String;
    email: String;
    gender: String;
    date_of_birth: Date;
    address: String;
    city: String;
    country: String;
    mobileNo: Number;
    aadharId: Number;
  }
  