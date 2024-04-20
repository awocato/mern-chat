import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import SidebarSheet from "./SidebarSheet";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

function Header() {
  const { authUser } = useAuthContext();
  return (
    <main className="flex justify-between items-center md:pt-10 md:pb-10 py-5 ">
      <header>
        <Link className="text-2xl font-black" to="/">
          Chat.
        </Link>
      </header>
      <nav className="items-center flex  font-medium">
        {!authUser && (
          <div className="hidden space-x-4 mx-4 md:flex">
            <NavLink to="/login">
              <Button>Log-in</Button>
            </NavLink>
            <NavLink to="/signup">
              <Button>Sign-up</Button>
            </NavLink>
          </div>
        )}
        <ModeToggle />
        {authUser && <SidebarSheet />}
        {!authUser && (
          <Drawer>
            <DrawerTrigger className="md:hidden">
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent className="p-10 flex flex-col gap-5 items-center">
              <div className="flex gap-5">
                <NavLink to="/login">
                  <Button>Log-in</Button>
                </NavLink>
                <NavLink to="signup">
                  <Button>Sign-up</Button>
                </NavLink>
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </nav>
    </main>
  );
}

export default Header;
