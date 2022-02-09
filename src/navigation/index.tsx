import * as routes from "./routes";

import { Route, Routes } from "react-router-dom";

import { AuthRoute } from "./AuthRoute";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Setting from "../pages/Setting";
import Orders from "../pages/Orders";

export default function Navigation() {
  return (
    <Routes>
      <Route path={routes.LOGIN} element={<Login />} />
      <Route
        path={routes.DASHBOARD}
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
      <Route
        path={routes.ORDERS}
        element={
          <AuthRoute>
            <Orders />
          </AuthRoute>
        }
      />
      <Route
        path={routes.SETTINGS}
        element={
          <AuthRoute>
            <Setting />
          </AuthRoute>
        }
      />
    </Routes>
  );
}
