import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { User } from "../../types";

export default function UserProfile({ user }: { user: User }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="avatar"
        src={user.avatar}
        sx={{ width: 56, height: 56, mr: 2 }}
      />
      <Box>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          {user.first_name}
        </Typography>
        <Typography variant="subtitle2" color="gray">
          {user.email}
        </Typography>
      </Box>
    </Box>
  );
}
