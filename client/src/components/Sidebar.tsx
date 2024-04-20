import LogoutButton from "./LogoutButton";
import Conversations from "./Conversations";
import Search from "./Search";

function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={`flex h-[90vh]  md:h-[70vh] justify-between  pt-5 gap-5 md:pt-0 flex-col md:w-[30vw] lg:w-[20vw]  ${className}`}
    >
      <Search />
      <Conversations />
      <LogoutButton />
    </aside>
  );
}

export default Sidebar;
