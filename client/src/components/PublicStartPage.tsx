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

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Post[]) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
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
  width: { xs: "15rem", sm: "28rem", md: "30rem", lg: "32rem" },
  gap: "2rem",
  backgroundColor: theme.palette.secondary.main,
  padding: "2rem 6rem",
  borderRadius: "35px",
};
