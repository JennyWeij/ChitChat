import { Box, Divider, ThemeProvider, Typography } from "@mui/material";
import { posts } from "../../data";

import AdminSinglePost from "../components/AdminSinglePost";
import { themeAdmin } from "../theme";

export default function AdminPage() {
  return (
    <ThemeProvider theme={themeAdmin}>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={adminTitle}>ADMIN</Typography>
        <Box sx={wallContainer}>
          <Typography variant="h2">All posts</Typography>
          <Divider sx={dividerStyling} />
          <Box sx={wallBackground}>
            {posts.map((post, index) => (
              <AdminSinglePost
                key={index}
                name={post.name}
                timestamp={post.timestamp}
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