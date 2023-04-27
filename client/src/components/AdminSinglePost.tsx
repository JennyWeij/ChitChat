import { PersonOutline } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Divider,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { themeAdmin } from "../theme";
import EditDeleteButtons from "./EditDeleteButtons";

interface Props {
  id: string;
  name: string;
  timestamp: string;
  title: string;
  content: string;
}

export default function AdminSinglePost({
  id,
  name,
  timestamp,
  title,
  content,
}: Props) {
  const formattedTimestamp = new Date(timestamp).toLocaleString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <ThemeProvider theme={themeAdmin}>
      <Box sx={flexBox}>
        <Card sx={cardStyling}>
          <CardContent>
            <Box sx={cardHeader}>
              <Box sx={nameAndIcon}>
                <PersonOutline sx={iconStyling} />
                <Typography variant="h5">{name}</Typography>
              </Box>
              <Typography sx={timeStyling}>{formattedTimestamp}</Typography>
            </Box>
            <Divider sx={dividerStyling} />
            <Box>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.3rem",
                    md: "1.3rem",
                    lg: "1.3rem",
                  },
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
                variant="body2"
              >
                {title}
              </Typography>
              <Typography sx={{ textAlign: "left" }} variant="body2">
                {content}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <EditDeleteButtons id={id} title={title} content={content} />
      </Box>
    </ThemeProvider>
  );
}

const cardStyling = {
  width: { xs: "20rem", sm: "25rem", md: "27rem", lg: "31rem" },
  borderRadius: "20px",
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
};

const nameAndIcon = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

const iconStyling = {
  fontSize: "30px",
  color: themeAdmin.palette.darktext.main,
};

const dividerStyling = {
  margin: "12px 0",
  backgroundColor: themeAdmin.palette.primary.main,
};

const timeStyling = {
  color: themeAdmin.palette.lighttext.main,
  fontFamily: "Sulphur Point",
  fontSize: "20px",
};

const flexBox = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
};
