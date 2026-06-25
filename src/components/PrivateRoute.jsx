import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuthenticated =
    sessionStorage.getItem("admin_authenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
