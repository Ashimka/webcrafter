import { Outlet, useLocation, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getAccessToken } from "../service/token.service";
import { UserToken } from "../types";

const RequireAuth = () => {
  const location = useLocation();
  const token = getAccessToken();

  const decodedToken = token && jwtDecode<UserToken>(token);

  const isAdmin = decodedToken ? decodedToken.role : "";

  return isAdmin === "ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
