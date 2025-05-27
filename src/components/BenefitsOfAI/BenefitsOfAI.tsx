import { Image } from "@fluentui/react-components";
import SectionHeading from "../SectionHeading";

export default function BenefitsOfAI() {
  const benefitsPartOne = [
    {
      title: "Personalization 1",
      imgSrc: "/images/personalization1.png",
    },
    {
      title: "Personalization 2",
      imgSrc: "/images/personalization2.png",
    },
    {
      title: "Scale your visibility",
      imgSrc: "/images/scale_your_visibility.png",
    },
  ];

  return (
    <section className="mt-16 lg:mt-28">
      <SectionHeading heading="Benefits of AI" />

      <div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2 text-center mb-8 lg:mb-2">
          {benefitsPartOne.map((item, index) => (
            <Image
              key={index}
              alt={item.title}
              src={item.imgSrc}
              className="text-center mx-auto"
              style={{ textAlign: "center" }}
            />
          ))}
        </div>

        <div className="w-full">
          <Image
            src="/images/marketing_suggestions.png"
            alt="Marketing suggestions & Technical writing"
          />
        </div>
      </div>
    </section>
  );
}
