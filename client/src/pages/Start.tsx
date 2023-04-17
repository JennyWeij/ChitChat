import { Box, Divider, Typography } from "@mui/material";
import SinglePost from "../components/SinglePost";
import TextButton from "../components/TextButton";
import { theme } from "../theme";

export default function StartPage() {
  return (
    <Box>
      <Box sx={buttonContainer}>
        <TextButton mode="light">Log In</TextButton>
        <TextButton mode="dark">Create Account</TextButton>
      </Box>
      <Box sx={wallContainer}>
        <Typography variant="h2">Lastest posts</Typography>
        <Divider sx={dividerStyling}/>
      </Box>
      <SinglePost />
    </Box>
  );
}

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
};

const wallContainer = {
  display: "flex",
  marginTop: "3rem",
  alignItems: "center",
  flexDirection: "column",
};

const dividerStyling = {
    backgroundColor: theme.palette.mediumtext.main,
    width: "80%",
    margin: "1rem",
}
