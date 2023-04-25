import { Box, Divider, Typography } from "@mui/material";
import { useUsers } from "../hooks/useUsers";
import { themeAdmin } from "../theme";
import AdminControlCard from "./AdminControlCard";

export default function AdminControlPanel() {
  const { users, fetchUsers } = useUsers();

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
        console.log("User promoted to admin");
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
        console.log("User deleted");
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
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="center"
        marginBottom="3rem"
      >
        <Typography
          variant="h2"
          fontWeight="bold"
        >
          Admin
        </Typography>
      </Box>
      <Typography sx={underTitel}>All Users</Typography>
      <Divider sx={dividerStyling} />

      {/* Admin user */}
      {adminUsers.map((user, index) => (
        <AdminControlCard
          key={index}
          name={user.username}
          isAdmin={user.isAdmin}
          userId={user._id}
          promoteUser={promoteUser}
          deleteUser={deleteUser}
        />
      ))}

      {/* reguler user */}
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
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

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

const underTitel = {
  // variant: "h2",
  fontSize: "h2",
  color: themeAdmin.palette.darktext.main,
};
