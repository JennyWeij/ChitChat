import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import { Post } from "../../data";
// import { Post, posts } from "../../data";
import { theme } from "../theme";
import CreatePostForm from "./CreatePostForm";
import SinglePostCard from "./SinglePostCard";

interface Post {
  _id: string;
  author: string;
  createdAt: string;
  title: string;
  content: string;
}

function handleCreatePost(values: { content: string }) {
  console.log(values);
}

export default function UserStartPage() {
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
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ marginTop: "2rem" }} variant="h2">
        Create a new post
      </Typography>
      <Box sx={formBackground}>
        <CreatePostForm onSubmit={handleCreatePost} />
      </Box>
      <Box sx={wallContainer}>
        <Typography variant="h2">Lastest posts</Typography>
        <Divider sx={dividerStyling} />
        <Box sx={wallBackground}>
          {data
            .slice()
            .reverse()
            .map((post) => (
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
