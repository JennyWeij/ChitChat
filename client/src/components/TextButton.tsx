import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../theme";

interface Props {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function TextButton({
  to = "",
  children,
  onClick,
  type = "button",
}: Props) {
  return (
    <Link
      to={to}
      style={styledLink}
    >
      <Button
        variant="contained"
        sx={styledButton}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    </Link>
  );
}

const styledButton = {
  color: theme.palette.darkaccent.main,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
};

const styledLink = {
    textDecoration: "none",
};
