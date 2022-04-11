import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  authenticationPath: string;
  role_Id: any;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  authenticationPath,
  role_Id,
  outlet,
}: ProtectedRouteProps) {
  console.log("role");
  if (role_Id == 1) return outlet;
  else return <Navigate to={authenticationPath} />;
}
