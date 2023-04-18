import { Box, TextField, Typography } from "@mui/material";
import TextButton from "../components/TextButton";
import { theme } from "../theme";

export default function LoginPage() {
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
        <Typography variant="h2">Sign in</Typography>
        <Box
          sx={{
            width: "32rem",
            height: "13rem",
            marginTop: "2rem",
            marginBottom: "2.5rem",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "35px",
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "0.2rem",
            alignItems: "center",
            justifyItems: "start",
          }}
        >
          <Typography variant="h4" marginLeft="4rem" gridColumn="1">
            Username
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.white.main,
              gridColumn: "2",
              gridRow: "1",
              marginRight: "1rem",
              marginLeft: "1rem",
            }}
          />
          <Typography variant="h4" marginLeft="4rem" gridColumn="1">
            Password
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.white.main,
              gridColumn: "2",
              gridRow: "2",
              marginRight: "1rem",
              marginLeft: "1rem",
            }}
          />
        </Box>

        <TextButton mode="light">Log in</TextButton>
      </Box>
    </Box>
  );
}
