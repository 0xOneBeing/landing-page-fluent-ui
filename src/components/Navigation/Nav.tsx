interface NavItem {
  href: string;
  label: string;
}

interface NavProps {
  options: NavItem[];
}

export default function Nav({ options }: NavProps) {
  return (
    <>
      <nav>
        <ul className="flex flex-col lg:flex-row space-x-0 lg:space-x-7 space-y-4 lg:space-y-0">
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
