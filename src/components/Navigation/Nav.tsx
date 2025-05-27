interface NavItem {
  href: string;
  label: string;
}

interface NavProps {
  options: NavItem[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function Nav({
  options,
  orientation = "horizontal",
  className = "",
}: NavProps) {
  return (
    <>
      <nav className={className}>
        <ul
          className={`flex ${
            orientation === "vertical" ? "flex-col" : "lg:flex-row"
          } space-x-0 lg:space-x-7 space-y-4 lg:space-y-0`}
        >
          {options.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
