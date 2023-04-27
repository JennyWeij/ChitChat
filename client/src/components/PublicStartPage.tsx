import { Box, Divider, Typography } from "@mui/material";
import { usePosts } from "../contexts/PostsContext";
import { theme } from "../theme";
import SinglePostCard from "./SinglePostCard";
import TextButton from "./TextButton";

export default function PublicStartPage() {
  const { posts, fetchPosts } = usePosts();

  return (
    <Box>
      <Box sx={buttonContainer}>
        <TextButton to="/login" mode="light">
          Log In
        </TextButton>
        <TextButton to="/signup" mode="dark">
          Create Account
        </TextButton>
      </Box>
      <Box sx={wallContainer}>
        <Typography variant="h2">Latest posts</Typography>
        <Divider sx={dividerStyling} />
        <Box sx={wallBackground}>
          {posts
            .slice()
            .reverse()
            .map((post) => (
              <SinglePostCard
                key={post._id}
                id={post._id}
                name={post.author?.username || "Missing user"}
                timestamp={post.createdAt}
                title={post.title}
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
  padding: "2rem 6rem",
  width: { xs: "15rem", sm: "20rem", md: "30rem", lg: "32rem" },
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
  width: { xs: "15rem", sm: "20rem", md: "30rem", lg: "32rem" },
  gap: "2rem",
  backgroundColor: theme.palette.secondary.main,
  padding: "2rem 6rem",
  borderRadius: "35px",
};
