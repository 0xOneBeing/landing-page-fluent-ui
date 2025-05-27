import { Button, Image, Input } from "@fluentui/react-components";

export default function WaitList() {
  const peopleJoined = [
    {
      name: "John Doe",
      image: "/images/testimonial-person-2.png",
    },
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "John Doe",
      image: "/images/testimonial-person-1.png",
    },
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "John Doe",
      image: "/images/testimonial-person-3.png",
    },
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ];

  return (
    <section className="waitlist-container my-29">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full lg:w-[442px] text-center lg:text-start">
            <h1 className="text-2xl font-[500] mb-3">
              Join Our Waitlist For Updates
            </h1>
            <p className="text-lg font-[400]">
              Get weekly update about our community on your email, no spam
              guaranteed we promise ✌️
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 lg:gap-0">
          <form className="flex flex-col items-center">
            <div className="flex flex-col gap-0 relative">
              <div className="w-full lg:w-[560px]">
                <Input
                  required
                  type="email"
                  className="waitlist-input"
                  placeholder="youremail123@gmail.com"
                  style={{
                    width: "100%",
                    borderRadius: 0,
                    padding: "24px 80px 24px 20px",
                    // "&:focus-within": {
                    //   borderBottom: 0,
                    // },
                  }}
                />
              </div>

              <div className="absolute flex items-center justify-end top-14 right-0">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    padding: "20px 24px 20px 42px",
                    borderRadius: 0,
                    transition: "background-color 0.2s",
                  }}
                  className="text-4xl font-[600] hover:bg-blue-600 transition duration-200"
                >
                  Join waitlist
                </Button>
              </div>
            </div>
          </form>

          <div className="w-full lg:w-[560px] lg:pl-12 flex flex-col lg:flex-row items-center justify-center gap-3 mt-16">
            <div className="people-joined-container flex items-center gap-0 group">
              {peopleJoined.map((person, index) => (
                <Image
                  key={index}
                  src={person.image}
                  alt={person.name}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  className={`
                    w-10 h-10 rounded-full border-2 border-white object-cover
                    transition-all duration-200 ease-in-out
                    hover:-translate-y-1.5 hover:shadow-md hover:z-10
                    ${index > 0 ? "-ml-2.5 group-hover:ml-0.5" : ""} 
                  `}
                />
              ))}
            </div>

            <div className="flex items-center gap-4 bg-black p-2 pr-6 rounded-full">
              <span className="text-xs font-[400] rounded-full py-3 px-2 bg-[var(--primary-color)] text-white">
                295
              </span>
              <p className="text-xs font-[500] text-white">
                People joined today
              </p>
            </div>
            {/* <h1>Something</h1> */}
          </div>
        </div>
      </div>
    </section>
  );
}
