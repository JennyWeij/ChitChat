import { Box, Divider, Typography } from "@mui/material";
import { posts } from "../../data";
import { theme } from "../theme";
import CreatePostForm from "./CreatePostForm";
import SinglePostCard from "./SinglePostCard";

function handleCreatePost(values: { content: string }) {
  console.log(values);
}

export default function UserStartPage() {
  return (
    <Box>
      <CreatePostForm onSubmit={handleCreatePost} />
      <Box sx={wallContainer}>
        <Typography variant="h2">Lastest posts</Typography>
        <Divider sx={dividerStyling} />
        <Box sx={wallBackground}>
          {posts.map((post, index) => (
            <SinglePostCard
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