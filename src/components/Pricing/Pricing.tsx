import SectionHeading from "../SectionHeading";
import PricingCard from "./PricingCard";

export default function Pricing() {
  const pricing = [
    {
      type: "basic",
      title: "Basic",
      imgSrc: "/images/basic_price.png",
      caption: "For individuals",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99,
      includes: [
        "All analytics features",
        "Up to 250,000 tracked visits",
        "Normal support",
        "Up to 3 team members",
      ],
    },
    {
      type: "pro",
      title: "Pro",
      imgSrc: "/images/pro_price.png",
      caption: "For startups",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 199,
      includes: [
        "All analytics features",
        "Up to 1,000,000 tracked visits",
        "Premium support",
        "Up to 10 team members",
      ],
    },
    {
      type: "enterprise",
      title: "Enterprise",
      imgSrc: "/images/enterprise_price.png",
      caption: "For big companies",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 399,
      includes: [
        "All analytics features",
        "Up to 5,000,000 tracked visits",
        "Dedicated support",
        "Up to 50 team members",
      ],
    },
  ];

  return (
    <section className="mt-16 lg:mt-28">
      <SectionHeading heading="Pricing" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-9 ">
        {pricing.map((plan) => (
          <PricingCard key={plan.type} pricing={plan} />
        ))}
      </div>
    </section>
  );
}
