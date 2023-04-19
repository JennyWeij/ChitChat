import { Box, Divider, Typography } from "@mui/material";
import { posts } from "../../data";
import SinglePost from "../components/SinglePost";
import TextButton from "../components/TextButton";
import { theme } from "../theme";

export default function StartPage() {
  return (
    <Box>
      <Box sx={buttonContainer}>
        <TextButton to="/login" mode="light">Log In</TextButton>
        <TextButton to="/signup" mode="dark">Create Account</TextButton>
      </Box>
      <Box sx={wallContainer}>
        <Typography variant="h2">Latest posts</Typography>
        <Divider sx={dividerStyling} />
        <Box sx={wallBackground}>
          {posts.map((post, index) => (
            <SinglePost
              key={index}
              name={post.name}
              timestamp={post.timestamp}
              content={post.content}
            />
          ))}
        </Box>
      </Box>
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
};

const wallBackground = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  backgroundColor: theme.palette.secondary.main,
  padding: "2rem 6rem",
  borderRadius: "35px",
};