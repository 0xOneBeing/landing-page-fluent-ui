interface SectionHeadingProps {
  heading: string;
}

export default function SectionHeading({ heading }: SectionHeadingProps) {
  return (
    <>
      <h1 className="text-4xl font-[600] mb-4 lg:mb-16 text-center">{heading}</h1>
    </>
  );
}
