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
            width: { xs: "20rem", sm: "25rem", md: "30rem", lg: "32rem" },
            height: "13rem",
            marginTop: "2rem",
            marginBottom: "2.5rem",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "35px",
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: {
              xs: "repeat(4, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(2, 1fr)",
            },
            gap: "0.2rem",
            alignItems: "center",
            justifyItems: "start",
          }}
        >
          <Typography
            variant="h4"
            gridColumn="1"
            sx={{
              marginLeft: {
                xs: "4.5rem",
                sm: "7rem",
                md: "1.5rem",
                lg: "3rem",
              },
              marginTop: {
                xs: "0rem",
                sm: "0rem",
                md: "2rem",
                lg: "2rem",
              },
              gridRow: { xs: "1", sm: "1" },
            }}
          >
            Create username
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.white.main,
              gridColumn: { xs: "1", sm: "1", md: "2" },
              gridRow: { xs: "2", sm: "2", md: "1" },
              marginRight: "1rem",
              marginTop: {
                xs: "0rem",
                sm: "0rem",
                md: "2rem",
                lg: "2rem",
              },
              marginLeft: {
                xs: "3rem",
                sm: "5.5rem",
                md: "1.5rem",
                lg: "0.5rem",
              },
            }}
          />
          <Typography
            variant="h4"
            gridColumn="1"
            sx={{
              marginLeft: {
                xs: "4.5rem",
                sm: "7rem",
                md: "1.5rem",
                lg: "3rem",
              },
              gridRow: { xs: "3", sm: "3" },
              marginBottom: { xs: "0rem", sm: "0rem", md: "2rem", lg: "2rem" },
            }}
          >
            Create password
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.white.main,
              gridColumn: { xs: "1", sm: "1", md: "2" },
              gridRow: { xs: "4", sm: "4", md: "3" },
              marginRight: "1rem",
              marginBottom: { xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" },
              marginLeft: {
                xs: "3rem",
                sm: "5.5rem",
                md: "1.5rem",
                lg: "0.5rem",
              },
            }}
          />
        </Box>

        <TextButton mode="light">Register</TextButton>
      </Box>
    </Box>
  );
}
