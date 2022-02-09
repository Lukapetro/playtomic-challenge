import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Resource } from "../../types";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box bgcolor={resource.color} sx={{ height: 100, width: 100 }}></Box>
      <Typography variant="subtitle1">{resource.name} </Typography>
      <Typography variant="subtitle2" sx={{ color: "gray" }}>
        {resource.pantone_value}
      </Typography>
    </Box>
  );
}
