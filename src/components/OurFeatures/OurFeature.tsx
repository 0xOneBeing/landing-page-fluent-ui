import { Image } from "@fluentui/react-components";
import SectionHeading from "../SectionHeading";

export default function OurFeatures() {
  const features = [
    {
      iconSrc: "/icons/advance_fraud_detection.svg",
      title: "Advance Fraud Detection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      iconSrc: "/icons/customer_information_manager.svg",
      title: "Customer information manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      iconSrc: "/icons/smart_budgeting.svg",
      title: "Smart budgeting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      iconSrc: "/icons/simple_checkout.svg",
      title: "Simple checkout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      iconSrc: "/icons/ai_invoicing.svg",
      title: "AI invoicing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      iconSrc: "/icons/analytics_management.svg",
      title: "Analytics management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
  ];

  return (
    <section className="mt-16 lg:mt-28">
      <SectionHeading heading="Our Features" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-16 px-10">
        {features.map((feature, index) => (
          <div key={index}>
            <Image
              alt="feature icon"
              src={feature?.iconSrc}
              className="bg-[rgba(217,217,217,0.2)] mb-3"
            />

            <h3 className="text-xl text-[rgba(0,0,0,1)] font-[500] mb-3">
              {feature?.title}
            </h3>

            <p className="text-xs text-[rgba(98,108,133,1)] font-[500]">
              {feature?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
