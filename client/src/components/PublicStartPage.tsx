import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../theme";
import SinglePostCard from "./SinglePostCard";
import TextButton from "./TextButton";

interface Post {
  _id: string;
  author: string;
  createdAt: string;
  title: string;
  content: string;
}

export default function PublicStartPage() {
  const [data, setData] = useState<Post[]>([]);

  async function fetchData() {
    try {
      const response = await fetch("/api/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
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
          {data.map((post) => (
            <SinglePostCard
              key={post._id}
              name={post.author}
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
