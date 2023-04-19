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
import AlertDialog from "./AlertDialog";
import EditDialogAdmin from "./EditDialogAdmin";

interface Props {
  name: string;
  timestamp: string;
  content: string;
}

export default function AdminSinglePost({ name, timestamp, content }: Props) {
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
              <Typography sx={timeStyling}>{timestamp}</Typography>
            </Box>
            <Divider sx={dividerStyling} />
            <Box sx={contentStyle}>
              <Typography variant="body2">{content}</Typography>
            </Box>
          </CardContent>
        </Card>
        <Box sx={editDelete}>
          <EditDialogAdmin />
          <AlertDialog />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const cardStyling = {
  maxWidth: "500px",
  borderRadius: "20px",
  padding: "5px 15px",
  minWidth: "300px",
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

const contentStyle = {
  "@media (max-width: 600px)": {
    width: "100%",
  },
};

const editDelete = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  marginLeft: "0.4rem",
  gap: "1rem",
  marginTop: "1.5rem",
  color: themeAdmin.palette.darktext.main,
  "@media (max-width: 600px)": {
    flexDirection: "row",
    marginTop: "0.5rem",
  },
};

const flexBox = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
};
