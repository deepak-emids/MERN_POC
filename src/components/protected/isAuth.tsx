import { Navigate } from "react-router-dom";

export type AuthRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: AuthRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={authenticationPath} />;
  }
}
