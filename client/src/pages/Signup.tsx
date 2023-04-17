import { Box, TextField, Typography } from "@mui/material";
import TextButton from "../components/TextButton";
import { theme } from "../theme";

export default function SignupPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Register new user</Typography>
        <Box
          sx={{
            width: "32rem",
            height: "14rem",
            marginTop: "2rem",
            marginBottom: "2rem",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "35px",
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "0.2rem",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Typography variant="h4" marginLeft="2rem" gridColumn="1">
            Create username
          </Typography>
          <TextField
            id="outlined-basic"
            // label="Username"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              gridColumn: "2",
              gridRow: "1",
              marginRight: "1rem",
            }}
          />
          <Typography variant="h4" marginLeft="2rem" gridColumn="1">
            Create password
          </Typography>
          <TextField
            id="outlined-basic"
            // label="Password"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              gridColumn: "2",
              gridRow: "2",
              marginRight: "1rem",
            }}
          />
        </Box>

        <TextButton mode="light">Register</TextButton>
      </Box>
    </Box>
  );
}
