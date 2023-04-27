import { PersonOutline } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { theme } from "../theme";
import EditDeleteButtons from "./EditDeleteButtons";

interface Props {
  id: string;
  name: string;
  timestamp: string;
  title: string;
  content: string;
}

export default function SinglePostCard({
  id,
  name,
  timestamp,
  title,
  content,
}: Props) {
  const { username } = useContext(AuthContext);

  const showEditDeleteButtons = name === username;

  const formattedTimestamp = new Date(timestamp).toLocaleString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Box sx={flexBox}>
      <Card sx={cardStyling}>
        <CardContent>
          <Box sx={cardHeader}>
            <Box sx={nameAndIcon}>
              <PersonOutline sx={iconStyling} />
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                    lg: "1.3rem",
                  },
                }}
                variant="h5"
              >
                {name}
              </Typography>
            </Box>
            <Typography sx={timeStyling}>{formattedTimestamp}</Typography>
          </Box>
          <Divider sx={dividerStyling} />
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
          <Typography
            sx={{
              textAlign: "left",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.1rem",
                lg: "1.2rem",
              },
            }}
            variant="body2"
          >
            {content}
          </Typography>
        </CardContent>
      </Card>
      {showEditDeleteButtons && <EditDeleteButtons id={id} title={title} content={content} />}
    </Box>
  );
}

const cardStyling = {
  width: { xs: "16rem", sm: "25rem", md: "27rem", lg: "31rem" },
  borderRadius: "20px",
  padding: "5px 15px",
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const nameAndIcon = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

const iconStyling = {
  fontSize: "30px",
  color: theme.palette.darktext.main,
};

const dividerStyling = {
  margin: "12px 0",
  backgroundColor: theme.palette.primary.main,
};

const timeStyling = {
  color: theme.palette.lighttext.main,
  fontFamily: "Sulphur Point",
  fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem", lg: "1.3rem" },
};

const flexBox = {
  display: "flex",
};
