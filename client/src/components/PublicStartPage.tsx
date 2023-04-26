import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../theme";
import SinglePostCard from "./SinglePostCard";
import TextButton from "./TextButton";

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

export default function PublicStartPage() {
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
  width: { xs: "15rem", sm: "28rem", md: "30rem", lg: "32rem" },
  gap: "2rem",
  backgroundColor: theme.palette.secondary.main,
  padding: "2rem 6rem",
  borderRadius: "35px",
};
