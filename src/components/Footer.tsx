import { Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 8, mb: 4 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.lukapetrovic.dev/">
        Lukapetro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
