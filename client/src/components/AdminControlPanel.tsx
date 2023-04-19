import { Box, Typography } from "@mui/material";
import { posts } from "../../data";
import AdminControlCard from "./AdminControlCard";

export default function AdminControlPanel() {
  const adminUsers = posts.filter((post) => post.role === "admin");
  const regularUsers = posts.filter((post) => post.role === "user");
  
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Box display="flex" justifyContent="center" marginBottom="3rem">
        <Typography variant="h2" fontWeight="bold">
          Admin
        </Typography>
      </Box>

      {/* Admin user */}
      {adminUsers.map((user, index) => (
        <AdminControlCard
          key={index}
          name={user.name}
          role={user.role}
        />
      ))}

      {/* reguler user */}
      {regularUsers.map((user, index) => (
        <AdminControlCard
          key={index}
          name={user.name}
          role={user.role}
        />
      ))}
    </Box>
  );
}
