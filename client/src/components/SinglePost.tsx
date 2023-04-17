import { PersonOutline } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { theme } from "../theme";

interface Props {
  name: string;
  timestamp: string;
  content: string;
}

export default function SinglePost({ name, timestamp, content }: Props) {
  return (
    <Card sx={cardStyling}>
      <CardContent>
        <Box sx={cardHeader}>
          <Box sx={nameAndIcon}>
            <PersonOutline sx={iconStyling} />
            <Typography variant="h5">{name}</Typography>
          </Box>
          <Typography sx={timeStyling}>{timestamp}</Typography>
        </Box>
        <Divider sx={dividerStyling} />
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
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
