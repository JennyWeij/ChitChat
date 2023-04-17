import { PersonOutline } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { theme } from "../theme";

export default function SinglePost() {
  return (
    <Card sx={cardStyling}>
      <CardContent>
        <Box sx={cardHeader}>
          <Box sx={nameAndIcon}>
            <PersonOutline sx={iconStyling}/>
            <Typography variant="h5">Sophie</Typography>
          </Box>
          <Typography sx={timeStyling}>2023-04-16 20:19</Typography>
        </Box>
        <Divider sx={dividerStyling}/>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
          diam eget erat eleifend molestie. Morbi ut turpis a erat tincidunt
          tincidunt ut eget nibh. Suspendisse mi tortor, vulputate sed tortor
          ac, sodales sollicitudin risus. Aliquam vel risus vel nisi auctor
          mollis.
        </Typography>
      </CardContent>
    </Card>
  );
}

const cardStyling = {
  maxWidth: "500px",
  borderRadius: "20px",
  padding: "5px 15px"
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const nameAndIcon = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
}

const iconStyling = {
    fontSize: "30px",
    color: theme.palette.darktext.main,

}

const dividerStyling = {
    margin: "12px 0",
    backgroundColor: theme.palette.primary.main,
}

const timeStyling = {
    color: theme.palette.lighttext.main,
    fontFamily: "Sulphur Point",
    fontSize: "20px"
}