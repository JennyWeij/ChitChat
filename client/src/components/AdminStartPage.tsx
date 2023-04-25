import { Box, Divider, ThemeProvider, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { themeAdmin } from "../theme";
import AdminSinglePost from "./AdminSinglePost";

interface User {
  _id: string;
  username: string;
}

interface Post {
  _id: string;
  author: User;
  createdAt: string;
  title: string;
  content: string;
}

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchData() {
    try {
      const postsResponse = await fetch("/api/posts");
      if (!postsResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const postsData = await postsResponse.json();
      setPosts(postsData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
