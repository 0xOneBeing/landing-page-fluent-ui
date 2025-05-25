import {
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";
import useStyles from "../utils/Styles/useStyles";

export default function GetStartedButton() {
  const classes = useStyles();

  return (
    <>
      <Popover withArrow>
        <PopoverTrigger disableButtonEnhancement>
          <Button
            size="large"
            appearance="primary"
            className={`${classes.primaryButton} mt-4 text-center`}
          >
            Get started
          </Button>
        </PopoverTrigger>
        <PopoverSurface className="border border-[var(--primary-color)]">
          <div>
            <h3 className="font-semibold text-base mb-1">Good job!</h3>

            <p>Feature coming soon</p>
          </div>
        </PopoverSurface>
      </Popover>
    </>
  );
}
