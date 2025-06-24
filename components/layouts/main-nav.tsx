import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

interface NavMenuProps extends React.ComponentProps<"div"> {
  menu: string[];
  menuClass?: string;
}

function MainNav({ menu, menuClass, ...props }: NavMenuProps) {
  return (
    <div {...props}>
      <NavigationMenu>
        <NavigationMenuList className={cn("flex-wrap gap-x-6", menuClass)}>
          {menu.map((menu, index) => (
            <React.Fragment key={index}>
              <NavigationMenuItem>
                <Link href={`#${menu}`} className="text-[1rem] leading-snug text-white transition-all duration-300 hover:text-primary">
                  {menu}
                </Link>
              </NavigationMenuItem>
            </React.Fragment>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default MainNav;
