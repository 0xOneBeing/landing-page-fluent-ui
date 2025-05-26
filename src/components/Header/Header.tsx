import Favicon from "../Favicon";
import Nav from "../Navigation/Nav";
import { Button } from "@fluentui/react-components";
import useStyles from "../../utils/Styles/useStyles";
import { Navigation24Regular } from "@fluentui/react-icons";

const Header = () => {
  const classes = useStyles();

  const isMobileLayout: boolean = window.innerWidth < 768;

  const navbar = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About us",
      href: "#",
    },
    {
      label: "Plans & pricing",
      href: "#",
    },
    {
      label: "Contact us",
      href: "#",
    },
  ];

  return (
    <div className="w-full flex justify-between items-center bg-white pt-4 lg:pt-16 px-4 lg:px-16">
      <Favicon />

      {isMobileLayout ? (
        <Button
          className={classes.mobileMenuButton}
          icon={<Navigation24Regular />}
        />
      ) : (
        <>
          <Nav options={navbar} />

          <div className="cta flex items-center gap-2">
            <Button
              size="small"
              appearance="secondary"
              className={classes.secondaryButton}
            >
              Sign Up
            </Button>
            <Button
              size="small"
              appearance="primary"
              className={classes.primaryButton}
            >
              Login
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
