import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  role_Id: any;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  role_Id,
  outlet,
}: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to={authenticationPath} />;
  }
  if (role_Id == 1) {
    return outlet;
  }
  if (role_Id == 2 && authenticationPath === "/login") {
    return outlet;
  }
  if (role_Id == 2 && authenticationPath === "/accessdenied") {
    return <Navigate to={authenticationPath} />;
  }
  return <Navigate to={authenticationPath} />;
}
