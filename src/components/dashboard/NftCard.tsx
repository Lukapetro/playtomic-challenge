import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Nft } from "../../types";

export default function NftCard({ nft }: { nft: Nft }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        alt="avatar"
        src={nft.image}
        sx={{ width: 56, height: 56, mr: 2 }}
      />
      <Typography variant="subtitle1">{nft.name} </Typography>
      <Typography variant="subtitle2" sx={{ color: "gray" }}>
        {nft.price}
      </Typography>
    </Box>
  );
}
