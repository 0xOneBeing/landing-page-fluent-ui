import Favicon from "../Favicon";
import Nav from "../Navigation/Nav";
import GetStartedButton from "../GetStartedButton";

const Footer = () => {
  const isMobileLayout = window.innerWidth < 768;

  const navbar = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About us",
      href: "#",
    },
    {
      label: "Plans & pricing",
      href: "#",
    },
    {
      label: "News & blogs",
      href: "#",
    },
    {
      label: "Careers",
      href: "#",
    },
    {
      label: "Contact us",
      href: "#",
    },
    {
      label: "Terms",
      href: "#",
    },
    {
      label: "Cookies",
      href: "#",
    },
  ];

  return (
    <>
      <section className="footer bg-white text-black mb-4">
        <div className="flex flex-col gap-14 justify-center items-center text-center pt-10 lg:pt-48">
          <Favicon />

          <h1 className="text-2xl font-bold text-black w-full lg:w-[411px]">
            Get started to up your business with personal AI manager
          </h1>

          <GetStartedButton />

          <Nav
            orientation={isMobileLayout ? "vertical" : "horizontal"}
            options={navbar}
          />
        </div>
      </section>

      <div className="w-full bg-[var(--primary-color)] p-3"></div>
    </>
  );
};

export default Footer;
