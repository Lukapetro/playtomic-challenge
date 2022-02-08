import { Link, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Setting from "../pages/Setting";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="setting" element={<Setting />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
