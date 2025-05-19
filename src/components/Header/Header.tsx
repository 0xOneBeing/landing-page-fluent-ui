import { Button } from "@fluentui/react-components";
import useStyles from "../../utils/Styles/useStyles";
import { Navigation24Regular, Sparkle24Filled } from "@fluentui/react-icons";

const Header = () => {
  const classes = useStyles();

  const isMobileLayout: boolean = window.innerWidth < 768;

  return (
    <div className="w-full flex justify-between items-center">
      <div className="brand flex items-center gap-2 font-bold text-lg">
        <Sparkle24Filled style={{ color: "var(--black-color)" }} />
        <h1>Marcus</h1>
      </div>

      {isMobileLayout ? (
        <Button className={classes.mobileMenuButton} icon={<Navigation24Regular />} />
      ) : (
        <>
          <nav>
            <ul className="flex space-x-7 font-semibold">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Plans & pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>

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
