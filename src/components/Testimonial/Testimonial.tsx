import SectionHeading from "../SectionHeading";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const testimonials = [
    {
      imgSrc: "/images/testimonial-person-1.png",
      testimony:
        "Ai helped me transform my business even while i am away from work",
    },
    {
      imgSrc: "/images/testimonial-person-1.png",
      testimony:
        "Ai helped me transform my business even while i am away from work",
    },
    {
      imgSrc: "/images/testimonial-person-2.png",
      testimony:
        "Ai helped me transform my business even while i am away from work, it send me notifications of my analysis during work hours and i just find it amusing",
      date: "12 April 2025",
      time: "30min ago",
      name: "Marcus Oris CEO Uistudioo",
    },
    {
      imgSrc: "/images/testimonial-person-1.png",
      testimony:
        "Ai helped me transform my business even while i am away from work",
    },
    {
      imgSrc: "/images/testimonial-person-1.png",
      testimony:
        "Ai helped me transform my business even while i am away from work",
    },
    {
      imgSrc: "/images/testimonial-person-1.png",
      testimony:
        "Ai helped me transform my business even while i am away from work, it send me notifications of my analysis during work hours and i just find it amusing",
      date: "12 April 2025",
      time: "30min ago",
      name: "Marcus Oris CEO Uistudioo",
    },
    {
      imgSrc: "/images/testimonial-person-3.png",
      testimony:
        "Ai helped me transform my business even while i am away from work",
    },
  ];

  return (
    <section className="mt-28">
      <SectionHeading heading="Testimonial" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard testimonial={testimonial} key={index} />
        ))}
      </div>
    </section>
  );
}
