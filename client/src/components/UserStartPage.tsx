import { Box, Divider, Typography } from "@mui/material";

import { usePosts } from "../contexts/PostsContext";
import { theme } from "../theme";
import CreatePostForm from "./CreatePostForm";
import SinglePostCard from "./SinglePostCard";

export default function UserStartPage() {
  const { posts, fetchPosts } = usePosts();

  async function createPost(values: { title: string; content: string }) {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Response from server:", response);

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  async function handleCreatePost(values: { title: string; content: string }) {
    console.log("handleCreatePost called with values:", values);
    const newPost = await createPost(values);
    if (newPost) {
      fetchPosts();
    }
  }

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ marginTop: "2rem" }} variant="h2">
        Create a new post
      </Typography>

      <Box sx={formBackground}>
        <CreatePostForm onSubmit={handleCreatePost} isEditing={false} />
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
  padding: "3rem ",
  borderRadius: "35px",
};

const formBackground = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
  backgroundColor: theme.palette.secondary.main,
  padding: "1rem 2rem",
  borderRadius: "35px",
  margin: "1rem auto",
  textAlign: "start",
};
