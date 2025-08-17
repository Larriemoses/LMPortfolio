import { Navigate } from "react-router-dom";
import type { ReactNode } from "react"; //type-only import

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
