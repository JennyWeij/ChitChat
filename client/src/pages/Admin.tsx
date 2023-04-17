import { Box, ThemeProvider, Typography } from "@mui/material";
import { posts } from "../../data";
import AdminSinglePost from "../components/AdminSinglePost";
import { themeAdmin } from "../theme";

export default function AdminPage() {
  return (
    <ThemeProvider theme={themeAdmin}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Admin</Typography>

        <Box>
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
    </ThemeProvider>
  );
}
