import {
  Button,
  Image,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components";
import { Sparkle24Filled } from "@fluentui/react-icons";
import useStyles from "../../utils/Styles/useStyles";

const Hero = () => {
  const classes = useStyles();

  return (
    <div className="hero">
      <div className="hero-text flex flex-col items-center justify-center text-center mb-4">
        <Sparkle24Filled
          className="mb-2"
          style={{ color: "var(--black-color)" }}
        />

        <h1 className="w-full md:w-[600px] text-4xl text-[var(--primary-color)] mb-2">
          Take control of your money-smarter, faster, with AI
        </h1>

        <p className="text-sm w-full md:w-[750px]">
          Say goodbye to spreadsheets and guesswork. Our AI-powered assustant
          gives you real-time insights, automates budgeting and helps you make
          smarter finiacial decisions. All in one intuitive dashboard.
        </p>
      </div>

      <div className="hero-image flex items-center justify-center text-center mb-4">
        <Image src="/images/hero-image.png" alt="Hero Image" />
      </div>

      <div className="flex items-center justify-center text-center">
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
      </div>
    </div>
  );
};
export default Hero;
