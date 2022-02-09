import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import Spinner from "../components/common/Spinner";
import ResourceCard from "../components/setting/ResourceCard";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { fetchResource } from "../store/resource/resource.action";

export default function Setting() {
  const { loading, resources, error } = useAppSelector(
    (state) => state.resource
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResource());
  }, []);

  if (loading) return <Spinner />;
  if (error || !Array.isArray(resources))
    return <Typography>Error loading resources</Typography>;

  return (
    <Box>
      <Typography
        component="h1"
        variant="h5"
        sx={{ mb: 2, fontWeight: "bold" }}
      >
        Some data fetched
      </Typography>
      <Grid container spacing={3}>
        {resources.map((resource, index) => (
          <Grid item xs key={index}>
            <ResourceCard resource={resource} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
