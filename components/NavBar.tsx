import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
interface NavBarProps {
  className?: string;
}
export default function NavBar(NavBarProps: NavBarProps) {
  return (
    <nav className="col-span-12 w-full flex justify-between items-center  p-6 rounded-2xl  bg-[var(--primary)] ">
      <div>
        <Link href="/" className="font-kufam font-extrabold xl:text-xl link  ">
          &lt;Bentolio&gt;
        </Link>
      </div>
      <DarkModeToggle />
    </nav>
  );
}
