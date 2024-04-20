import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

import Sidebar from "./Sidebar";
import { MenuIcon } from "lucide-react";

export default function SidebarSheet() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden flex" asChild>
        <Button variant="secondary">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetHeader>
        <SheetTitle>
          <span className="sr-only">Sidebar</span>
        </SheetTitle>
      </SheetHeader>
      <SheetContent className="w-full md:w-[50vw] lg:hidden" side="left">
        <SheetClose className="w-full">
          <Sidebar />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
