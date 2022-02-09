import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import Spinner from "../components/common/Spinner";
import Chart from "../components/dashboard/Chart";
import UserProfile from "../components/dashboard/UserProfile";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { fetchCurrentUser } from "../store/user/user.action";
import NftCard from "../components/dashboard/NftCard";

import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";
import image3 from "../assets/images/3.png";

const nftsArray = [
  {
    id: 0,
    name: "Cryptopunk #1",
    price: "100 eth",
    image: image1,
  },
  {
    id: 1,
    name: "Cryptopunk #2",
    price: "10 eth",
    image: image2,
  },
  {
    id: 2,
    name: "Cryptopunk #3",
    price: "9999 eth",
    image: image3,
  },
];

export default function Dashboard() {
  const { error, loading, me } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Typography>Error loading</Typography>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <UserProfile user={me} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          NFT's
        </Typography>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container spacing={3}>
            {nftsArray.map((nft, index) => (
              <Grid item xs key={index}>
                <NftCard nft={nft} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ display: { xs: "none", sm: "block" } }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Profit
        </Typography>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
    </Grid>
  );
}
