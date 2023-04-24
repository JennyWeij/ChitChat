import { Box, Divider, Typography } from "@mui/material";
import { posts } from "../../data";
import { themeAdmin } from "../theme";
import AdminControlCard from "./AdminControlCard";

export default function AdminControlPanel() {
  const adminUsers = posts.filter((post) => post.role === "admin");
  const regularUsers = posts.filter((post) => post.role === "user");

  return (
    <Box sx={container}>
      <Box display="flex" justifyContent="center" marginBottom="3rem">
        <Typography sx={adminTitle}>Admin</Typography>
      </Box>
      <Typography sx={underTitel}>All Users</Typography>
      <Divider sx={dividerStyling} />

      {/* Admin user */}
      {adminUsers.map((user, index) => (
        <AdminControlCard key={index} name={user.name} role={user.role} />
      ))}

      {/* reguler user */}
      {regularUsers.map((user, index) => (
        <AdminControlCard key={index} name={user.name} role={user.role} />
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
