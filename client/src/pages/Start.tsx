import { Box, Typography } from "@mui/material";
import TextButton from "../components/TextButton";

export default function StartPage() {
  return (
    <Box>
      <Box sx={buttonContainer}>
        <TextButton mode="light">Log In</TextButton>
        <TextButton mode="dark">Create Account</TextButton>
      </Box>
      <Box sx={wallContainer}>
      <Typography>Lastest posts</Typography>
      </Box>
    </Box>
  );
}

const buttonContainer = {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
}

const wallContainer = {
    display: "flex",


}