import { Navigate, useLocation } from "react-router";
import Layout from "../components/Layout";

import { get } from "../utils/storage";

export const AuthRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  const isAuthenticated = get("token");

  if (!isAuthenticated) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return <Layout>{children}</Layout>;
};
