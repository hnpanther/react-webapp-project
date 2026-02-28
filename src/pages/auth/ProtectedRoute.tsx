import { Navigate } from "react-router-dom";
import { decodeToken, logout } from "../auth/Auth";

interface Props {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const payload = decodeToken();

  // if (!payload || isTokenExpired()) {
  if (!payload) {
    logout();
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.some(r => payload.groups.includes(r))) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;