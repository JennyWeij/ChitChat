import { DeleteOutline, EditNote, PersonOutline } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { theme } from "../theme";

interface Props {
  name: string;
  timestamp: string;
  content: string;
}

export default function AdminSinglePost({ name, timestamp, content }: Props) {
  return (
    <Box sx={flexBox}>
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
          <Box>
            <Typography variant="body2">{content}</Typography>
          </Box>
        </CardContent>
      </Card>
      <Box sx={editDelete}>
        <EditNote sx={{ margin: "0.5rem" }} />
        <DeleteOutline sx={{ margin: "0.5rem" }} />
      </Box>
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

const editDelete = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "0.4rem",
};

const flexBox = {
  display: "flex",
};
