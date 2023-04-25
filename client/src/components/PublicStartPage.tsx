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
  author: string;
  createdAt: string;
  title: string;
  content: string;
}

export default function PublicStartPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  async function fetchData() {
    try {
      const [postsResponse, usersResponse] = await Promise.all([
        fetch("/api/posts"),
        fetch("/api/users"),
      ]);
      if (!postsResponse.ok || !usersResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const [postsData, usersData] = await Promise.all([
        postsResponse.json(),
        usersResponse.json(),
      ]);
      setPosts(postsData);
      setUsers(usersData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function getAuthorName(authorId: string) {
    const user = users.find((user) => user._id === authorId);
    return user ? user.username : "";
  }

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
                name={getAuthorName(post.author)}
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
  gap: "2rem",
  backgroundColor: theme.palette.secondary.main,
  padding: "2rem 6rem",
  borderRadius: "35px",
};
