import { Image } from "@fluentui/react-components";
import { Sparkle24Filled } from "@fluentui/react-icons";
import GetStartedButton from "../GetStartedButton";

const Hero = () => {
  return (
    <div className="hero bg-white pb-28 px-4">
      <div className="hero-text flex flex-col items-center justify-center text-center mb-4 pt-24">
        <Sparkle24Filled
          className="mb-2 text-black"
          style={{ color: "var(--black-color)" }}
        />

        <h1 className="w-full md:w-[600px] text-4xl text-[var(--primary-color)] mb-2">
          Take control of your money-smarter, faster, with AI
        </h1>

        <p className="text-base w-full lg:w-[750px]">
          Say goodbye to spreadsheets and guesswork. Our AI-powered assustant
          gives you real-time insights, automates budgeting and helps you make
          smarter finiacial decisions. All in one intuitive dashboard.
        </p>
      </div>

      <div className="hero-image flex items-center justify-center text-center mb-4">
        <Image src="/images/hero-image.png" alt="Hero Image" />
      </div>

      <div className="flex items-center justify-center text-center">
        <GetStartedButton />
      </div>
    </div>
  );
};

export default Hero;
