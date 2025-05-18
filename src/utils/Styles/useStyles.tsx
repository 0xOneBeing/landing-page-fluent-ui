import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // These are all unique to Fancy theme.
    border: "2px solid green",
    backgroundColor: "pink",
    borderRadius: "64px",
  },
  icon: {
    color: "blue",
    backgroundColor: "white",
  },
  primaryButton: {
    fontSize: "14px",
    borderRadius: "50px",
    color: "var(--white-color)",
    backgroundColor: "var(--primary-color)",
    "&:hover": {
      backgroundColor: "darkred",
    },
  },
  secondaryButton: {
    fontSize: "14px",
    borderRadius: "50px",
    color: "var(--black-color)",
    backgroundColor: "var(--white-color)",
    "&:hover": {
      backgroundColor: "darkred",
    },
  },
});

export default useStyles;
