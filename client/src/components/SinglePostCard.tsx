import { PersonOutline } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { theme } from "../theme";
import EditDeleteButtons from "./EditDeleteButtons";

interface Props {
  name: string;
  timestamp: string;
  title: string;
  content: string;
}

export default function SinglePostCard({
  name,
  timestamp,
  title,
  content,
}: Props) {
  const { username } = useContext(AuthContext);

  const showEditDeleteButtons = name === username;

  return (
    <Box sx={flexBox}>
      <Card sx={cardStyling}>
        <CardContent>
          <Box sx={cardHeader}>
            <Box sx={nameAndIcon}>
              <PersonOutline sx={iconStyling} />
              <Typography variant="h5">Namn</Typography>
            </Box>
            <Typography sx={timeStyling}>tid</Typography>
          </Box>
          <Divider sx={dividerStyling} />
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
            variant="body2"
          >
            {title}
          </Typography>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
      </Card>
      {showEditDeleteButtons && <EditDeleteButtons />}
    </Box>
  );
}

const cardStyling = {
  maxWidth: "500px",
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
  fontSize: "20px",
};

const flexBox = {
  display: "flex",
};
