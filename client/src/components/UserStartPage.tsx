import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { theme } from "../theme";
import SinglePostCard from "./SinglePostCard";

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

export default function UserStartPage() {
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
    <Box sx={{ textAlign: "center" }}>
      {/* ... */}
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

const formBackground = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
  backgroundColor: theme.palette.secondary.main,
  padding: "1rem 2rem",
  borderRadius: "35px",
  margin: "1rem auto",
};
