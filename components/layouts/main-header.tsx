import { Menu } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import MainNav from "./main-nav";

function MainHeader() {
  const navMenu = ["About", "Services", "Experience", "Projects"];

  return (
    <header className="site-header sticky top-0 z-[999] py-4 bg-secondary">
      <div className="container flex justify-between items-center gap-x-10 backdrop-blur-lg rounded-full">
        <span className="flex-none font-dancing-script text-[1.5rem] leading-none text-white">
          Bijay Magar
        </span>

        <MainNav menu={navMenu} className="max-md:hidden" />
    
        <div className="flex items-center gap-4">
          <Link href="#" className={buttonVariants({className: "max-sm:hidden"})}>Contact Us</Link>

          <Sheet>
            <SheetTrigger>
              <Menu className="md:hidden text-white" />
            </SheetTrigger>
            <SheetContent className="z-[999] py-14 px-6 bg-black/40 backdrop-blur-lg border-0 [&>button]:text-white">
              <MainNav menu={navMenu} menuClass="flex flex-col gap-y-4" />
              <div className="mt-6">
                <Link href="#" className={buttonVariants({className: "sm:hidden"})}>Contact Us</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
