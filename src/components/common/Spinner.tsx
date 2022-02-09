import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export default function Spinner() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
