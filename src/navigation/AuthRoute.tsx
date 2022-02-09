import { Navigate, useLocation } from "react-router";
import Layout from "../components/Layout";

import { useAppSelector } from "../store/reduxHooks";

export const AuthRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  if (loading) return <p>loading</p>;

  if (!isAuthenticated) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return <Layout>{children}</Layout>;
};
