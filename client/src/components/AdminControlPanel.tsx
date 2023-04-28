import { Box, Divider, ThemeProvider, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useUsers } from "../hooks/useUsers";
import { themeAdmin } from "../theme";
import AdminControlCard from "./AdminControlCard";

export default function AdminControlPanel() {
  const { users, fetchUsers } = useUsers();
  const { username } = useAuth();

  const adminUsers = users.filter((user) => user.isAdmin);
  const regularUsers = users.filter((user) => !user.isAdmin);

  async function promoteUser(userId: string) {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isAdmin: true }),
      });

      if (response.ok) {
        fetchUsers();
      } else {
        const data = await response.json();
        console.error("Promotion error:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function deleteUser(userId: string) {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchUsers();
      } else {
        const data = await response.json();
        console.error("Deletion error:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <ThemeProvider theme={themeAdmin}>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={adminTitle}>ADMIN</Typography>
        <Box sx={wallContainer}>
          <Typography variant="h2">All users</Typography>
          <Divider sx={dividerStyling} />

          {/* Admin user */}
          {adminUsers.map(
            (user, index) =>
              user.username !== username && (
                <AdminControlCard
                  key={index}
                  name={user.username}
                  isAdmin={user.isAdmin}
                  userId={user._id}
                  promoteUser={promoteUser}
                  deleteUser={deleteUser}
                />
              )
          )}

          {/* Regular user */}
          {regularUsers.map((user, index) => (
            <AdminControlCard
              key={index}
              name={user.username}
              isAdmin={user.isAdmin}
              userId={user._id}
              promoteUser={promoteUser}
              deleteUser={deleteUser}
            />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const adminTitle = {
  fontWeight: "bold",
  fontSize: "2rem",
  color: themeAdmin.palette.darktext.main,
  marginBottom: "2rem",
};

const dividerStyling = {
  backgroundColor: themeAdmin.palette.mediumtext.main,
  width: "80%",
  margin: "1rem",
};

const wallContainer = {
  display: "flex",
  marginTop: "3rem",
  alignItems: "center",
  flexDirection: "column",
};
