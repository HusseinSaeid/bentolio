import DarkModeToggle from "./DarkModeToggle";
interface NavBarProps {
  className?: string;
}
export default function NavBar(NavBarProps: NavBarProps) {
  return (
    <nav className="col-span-12 flex justify-between items-center  p-6 rounded-2xl  bg-[var(--primary)] ">
      <div>
        <h2 className="font-kufam font-bold ">&lt;Bentolio&gt;</h2>
      </div>
      <DarkModeToggle />
    </nav>
  );
}
