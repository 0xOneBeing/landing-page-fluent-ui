import { useState, useEffect } from "react";
import Favicon from "../Favicon";
import Nav from "../Navigation/Nav";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import useStyles from "../../utils/Styles/useStyles";
import { Navigation24Regular, Dismiss24Regular } from "@fluentui/react-icons";

const Header = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileLayout, setIsMobileLayout] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileLayout(window.innerWidth < 768);
    };
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const SignInSignUpButton = () => {
    return (
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
    );
  };

  return (
    <>
      <div className="w-full flex justify-between items-center bg-white pt-4 lg:pt-8 px-4 lg:px-10">
        <Favicon />

        {isMobileLayout ? (
          <Button
            aria-label="Open navigation menu"
            className={classes.mobileMenuButton}
            icon={<Navigation24Regular />}
            onClick={() => setIsDrawerOpen(true)}
          />
        ) : (
          <>
            <Nav orientation="horizontal" options={navbar} />

            <SignInSignUpButton />
          </>
        )}
      </div>

      <Drawer
        type="overlay"
        separator
        open={isDrawerOpen}
        onOpenChange={(_, { open }) => setIsDrawerOpen(open)}
        position="end"
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsDrawerOpen(false)}
              />
            }
          >
            Menu
          </DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <Nav className="mb-8" orientation="vertical" options={navbar} />

          <SignInSignUpButton />
        </DrawerBody>
      </Drawer>
    </>
  );
};

export default Header;
