import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AdminControlCard from "./AdminControlCard";

interface User {
  _id: string;
  username: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminControlPanel() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          const errorData = await response.json();
          console.error("Error fetching users", errorData.message);
        }
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  const adminUsers = users.filter((user) => user.isAdmin);
  const regularUsers = users.filter((user) => !user.isAdmin);
  
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
          name={user.username}
          isAdmin={user.isAdmin}
        />
      ))}

      {/* reguler user */}
      {regularUsers.map((user, index) => (
        <AdminControlCard
          key={index}
          name={user.username}
          isAdmin={user.isAdmin}
        />
      ))}
    </Box>
  );
}
