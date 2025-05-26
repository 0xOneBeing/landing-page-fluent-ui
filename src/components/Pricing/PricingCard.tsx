import { Button, Image } from "@fluentui/react-components";
import useStyles from "../../utils/Styles/useStyles";

interface PricingCardProps {
  pricing: {
    type: string;
    title: string;
    imgSrc: string;
    caption: string;
    description: string;
    price: number;
    includes: string[];
  };
}

export default function PricingCard({ pricing }: PricingCardProps) {
  const classes = useStyles();
  const popularPricing = pricing.type === "pro";

  return (
    <div
      className={`${
        popularPricing ? "bg-[var(--primary-color)] mt-0" : "bg-white"
      } rounded-3xl shadow-lg py-14 px-11 w-full lg:w-[394px] relative 
      transition-all duration-300 ease-in-out hover:-translate-y-10 hover:shadow-2xl`}
    >
      <div className="flex items-start gap-4 mb-4">
        <Image src={pricing.imgSrc} alt={pricing.title} />

        <div>
          <p
            className={`${
              popularPricing
                ? "text-lg font-[500] text-[rgba(239,240,246,1)]"
                : "text-lg font-[500] text-[rgba(111,108,144,1)]"
            } mb-1`}
          >
            {pricing.caption}
          </p>
          <h3
            className={`text-2xl ${
              popularPricing
                ? "text-[rgba(239,240,246,1)]"
                : "text-[rgba(23,15,73,1)]"
            } font-[700] mb-0`}
          >
            {pricing.title}
          </h3>
        </div>

        {popularPricing && (
          <div className="absolute right-11 top-7 flex justify-end bg-[rgba(255,255,255,0.2)] text-white rounded-xl py-3 px-6">
            <p>Popular</p>
          </div>
        )}
      </div>

      <p
        className={`text-lg ${
          popularPricing
            ? "text-[rgba(217,219,233,1)]"
            : "text-[rgba(111,108,144,1)]"
        } line-clamp-6 mb-4`}
      >
        {pricing.description}
      </p>

      <p
        className={`text-xl ${
          popularPricing
            ? "text-[rgba(239,240,246,1)]"
            : "text-[rgba(111,108,144,1)]"
        } font-[500] mb-4`}
      >
        <span
          className={`text-5xl ${
            popularPricing
              ? "text-[rgba(239,240,246,1)]"
              : "text-[rgba(23,15,73,1)]"
          } font-[700]`}
        >
          ${pricing.price}
        </span>{" "}
        / monthly
      </p>

      <h3
        className={`text-lg ${
          popularPricing
            ? "text-[rgba(255,255,256,1)]"
            : "text-[rgba(23,15,73,1)]"
        } font-[700] mb-6`}
      >
        What's included:
      </h3>
      <ul className="mb-9">
        {pricing.includes.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 mb-2 ${
              popularPricing
                ? "text-[rgba(255,255,256,1)]"
                : "text-[rgba(111,108,144,1)]"
            }`}
          >
            <Image
              width={15}
              height={15}
              src={
                popularPricing
                  ? "/icons/white_check.svg"
                  : "/icons/green_check.svg"
              }
              alt={popularPricing ? "Green check" : "White check"}
            />

            {item}
          </li>
        ))}
      </ul>

      <Button
        style={{
          color: popularPricing ? "var(--primary-color)" : "var(--white-color)",
          backgroundColor: popularPricing
            ? "var(--white-color)"
            : "var(--primary-color)",
        }}
        className={classes.pricingButton}
        appearance="primary"
      >
        Get Started
      </Button>
    </div>
  );
}
