import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../theme";

interface Props {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  mode: "light" | "dark";
  type?: "button" | "submit";
}

export default function TextButton({
  to = "",
  children,
  onClick,
  type = "button",
  mode = "light",
}: Props) {
  return (
    <Link
      to={to}
      style={styledLink}
    >
      <Button
        variant="contained"
        sx={mode === "light" ? styledButtonLight : styledButtonDark}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    </Link>
  );
}

const commonButtonStyling = {
  borderStyle: "solid",
  borderRadius: "20px",
  borderWidth: "1px",
  borderColor: theme.palette.darktext.main,
  paddingTop: "0.2rem",
  paddingBottom: "0.2rem",
}

const styledButtonLight = {
  ...commonButtonStyling,
  color: theme.palette.darktext.main,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.darktext.main,
    boxShadow: "none",
  },
};

const styledButtonDark = {
  ...commonButtonStyling,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.darktext.main,
  "&:hover": {
    color: theme.palette.darktext.main,
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
  },
};

const styledLink = {
    textDecoration: "none",
};
