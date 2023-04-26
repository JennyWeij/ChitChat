import { Box, Divider, ThemeProvider, Typography } from "@mui/material";
import { useEffect } from "react";

import { usePosts } from "../hooks/usePosts";
import { themeAdmin } from "../theme";
import AdminSinglePost from "./AdminSinglePost";
import CreatePostForm from "./CreatePostForm";

export default function AdminPage() {
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

  useEffect(() => {
    // Change document.body background color to a linear gradient
    document.body.style.background =
      "linear-gradient(to bottom, #E1EEFA, #FFFFFF)";

    // Cleanup function to revert the change when the component unmounts
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <ThemeProvider theme={themeAdmin}>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={adminTitle}>ADMIN</Typography>
        <Box sx={formBackground}>
          <CreatePostForm onSubmit={handleCreatePost} />
        </Box>
        <Box sx={wallContainer}>
          <Typography variant="h2">All posts</Typography>
          <Divider sx={dividerStyling} />
          <Box sx={wallBackground}>
            {posts
              .slice()
              .reverse()
              .map((post) => (
                <AdminSinglePost
                  key={post._id}
                  name={post.author?.username || "Missing user"}
                  timestamp={post.createdAt}
                  title={post.title}
                  content={post.content}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const wallContainer = {
  display: "flex",
  marginTop: "3rem",
  alignItems: "center",
  flexDirection: "column",
};

const wallBackground = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  backgroundColor: themeAdmin.palette.secondary.main,
  padding: "2rem 6rem",
  borderRadius: "35px",
};

const dividerStyling = {
  backgroundColor: themeAdmin.palette.mediumtext.main,
  width: "80%",
  margin: "1rem",
};

const adminTitle = {
  fontWeight: "bold",
  fontSize: "2rem",
  color: themeAdmin.palette.darktext.main,
  marginBottom: "2rem",
};

const formBackground = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
  backgroundColor: themeAdmin.palette.secondary.main,
  padding: "1rem 2rem",
  borderRadius: "35px",
  margin: "1rem auto",
  textAlign: "start",
};
