import "./App.css";
import User from "./pages/user/User";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Employee from "./pages/employees/Employee";
import Department from "./pages/deparment/Department";
import Role from "./pages/roles/Roles";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import EmployeeForm from "./components/employeeForm/EmployeeForm";
import DepartmentForm from "./components/departmentForm/DepartmentForm";
import RoleForm from "./components/roleForm/RoleForm";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import AccessDenied from "./components/accessDenied/AccessDenied";

function App() {
  let auth = false;
  const token: any = localStorage.getItem("token");
  if (token != null || undefined) auth = true;
  const role_Id: any = localStorage.getItem("roleId");

  return (
    <>
      <Routes>
        <Route path="/login" element={<User />} />
        <Route
          path="/"
          element={
            <ProtectedRoute
              role_Id={role_Id}
              isAuthenticated={auth}
              authenticationPath="/login"
              outlet={<Dashboard />}
            />
          }
        >
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/accessdenied" element={<AccessDenied />} />
        </Route>
        <Route
          path="/employee"
          element={
            <ProtectedRoute
              isAuthenticated={auth}
              role_Id={role_Id}
              authenticationPath="/accessdenied"
              outlet={<Employee />}
            />
          }
        />
        <Route
          path="/addEmployee"
          element={
            <ProtectedRoute
              isAuthenticated={auth}
              role_Id={role_Id}
              authenticationPath="/accessdenied"
              outlet={<EmployeeForm />}
            />
          }
        />
        <Route
          path="/department"
          element={
            <ProtectedRoute
              isAuthenticated={auth}
              role_Id={role_Id}
              authenticationPath="/accessdenied"
              outlet={<Department />}
            />
          }
        />
        <Route
          path="/departmentForm"
          element={
            <ProtectedRoute
              isAuthenticated={auth}
              role_Id={role_Id}
              authenticationPath="/accessdenied"
              outlet={<DepartmentForm />}
            />
          }
        />
        <Route
          path="/role"
          element={
            <ProtectedRoute
              isAuthenticated={auth}
              role_Id={role_Id}
              authenticationPath="/accessdenied"
              outlet={<Role />}
            />
          }
        />
        <Route
          path="/roleForm"
          element={
            <ProtectedRoute
              isAuthenticated={auth}
              role_Id={role_Id}
              authenticationPath="/accessdenied"
              outlet={<RoleForm />}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
