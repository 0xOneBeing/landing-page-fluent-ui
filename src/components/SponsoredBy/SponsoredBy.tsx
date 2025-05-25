import SectionHeading from "../SectionHeading";
import { Image } from "@fluentui/react-components";

export default function SponsoredBy() {
  const sponsorsIcon = [
    {
      name: "Canva",
      src: "/icons/canva.svg",
      link: "",
    },
    {
      name: "Microsoft",
      src: "/icons/microsoft.svg",
      link: "",
    },
    {
      name: "Adobe",
      src: "/icons/adobe.svg",
      link: "",
    },
    {
      name: "cisco",
      src: "/icons/cisco.svg",
      link: "",
    },
    {
      name: "salesforce",
      src: "/icons/salesforce.svg",
      link: "",
    },
  ];

  return (
    <section className="mt-28">
      <SectionHeading heading="Sponsored by" />

      <div className="w-full px-4 grid grid-cols-3 lg:grid-cols-5 justify-center gap-16">
        {sponsorsIcon.map((item, index) => (
          <Image key={index} src={item.src} alt={item.name} />
        ))}
      </div>
    </section>
  );
}
