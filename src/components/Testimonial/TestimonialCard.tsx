import { Image } from "@fluentui/react-components";

interface TestimonialCardProps {
  testimonial: {
    imgSrc: string;
    testimony: string;
    date?: string;
    time?: string;
    name?: string;
    position?: string;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="testimonial-card flex justify-center items-start gap-2 mb-4">
      <Image src={testimonial.imgSrc} alt={testimonial.name || "Testifier"} />

      <div className="testimonial-content p-5 flex flex-col gap-2 rounded-[10px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        {testimonial.time && testimonial.date && (
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-[rgba(0,0,0,1)] font-[400]">
              {testimonial.date}
            </p>

            <p className="text-xs text-[rgba(132,130,138,1)] font-[400]">
              {testimonial.time}
            </p>
          </div>
        )}

        <p className="text-xs text-[rgba(0,0,0,1)] font-[400]">
          {testimonial.testimony}
        </p>

        {testimonial.name && (
          <p className="text-xs text-[rgba(0,0,0,1)] font-[500] mt-4">
            -&nbsp;{testimonial.name}
          </p>
        )}
      </div>
    </div>
  );
}
