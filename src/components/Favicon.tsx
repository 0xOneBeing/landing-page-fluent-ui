import { Link } from "@fluentui/react-components";
import { Sparkle24Filled } from "@fluentui/react-icons";

export default function Favicon() {
  return (
    <Link
      href="/"
      style={{ textDecoration: "none" }}
      className="no-underline hover:no-underline"
    >
      <div className="brand flex items-center gap-2 font-bold text-lg">
        <Sparkle24Filled style={{ color: "var(--black-color)" }} />
        <h1 className="text-black no-underline hover:no-underline">Marcus</h1>
      </div>
    </Link>
  );
}
