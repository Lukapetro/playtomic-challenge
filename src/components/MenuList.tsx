import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Divider } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

import * as routes from "../navigation/routes";
import { useAppDispatch } from "../store/reduxHooks";
import { logout } from "../store/auth/auth.slice";

export default function MenuList() {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  return (
    <React.Fragment>
      <ListItemButton component={NavLink} to={routes.DASHBOARD}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={NavLink} to={routes.SETTINGS}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />
      <ListItemButton component={Box} onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );
}
