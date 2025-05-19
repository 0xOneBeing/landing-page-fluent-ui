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
    borderRadius: "50px",
    padding: "10px 30px",
    color: "var(--white-color)",
    border: "2px solid transparent",
    backgroundColor: "var(--primary-color)",
    "&:hover": {
      color: "var(--primary-color)",
      backgroundColor: "var(---white-color)",
      border: "2px solid var(--primary-color)",
    },
    "&:active": {
      color: "var(--primary-color)",
      backgroundColor: "var(---white-color)",
      border: "2px solid var(--primary-color)",
    },
  },

  secondaryButton: {
    borderRadius: "50px",
    padding: "10px 30px",
    color: "var(--black-color)",
    backgroundColor: "var(--white-color)",
    "&:hover": {
      color: "var(--white-color)",
      backgroundColor: "var(--primary-color)",
    },
  },

  mobileMenuButton: {
    border: 0,
    // color: "var(--black-color)",
    // backgroundColor: "var(--white-color)",
    // "&:hover": {
    //   color: "var(--white-color)",
    //   backgroundColor: "var(--primary-color)",
    // },
  },
});

export default useStyles;
