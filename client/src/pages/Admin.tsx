import { Box, Divider, ThemeProvider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AdminSinglePost from "../components/AdminSinglePost";
// import { posts } from "../../data";

import { themeAdmin } from "../theme";

interface Post {
  _id: string;
  author: string;
  createdAt: string;
  title: string;
  content: string;
}

export default function AdminPage() {
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
            {data
              .slice()
              .reverse()
              .map((post) => (
                <AdminSinglePost
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
