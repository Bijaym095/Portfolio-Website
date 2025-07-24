import { cn } from "@/lib/utils";
import React from "react";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";

interface NavMenuProps extends React.ComponentProps<"div"> {
  menu: string[];
  menuClass?: string;
}

function MainNav({ menu, menuClass, ...props }: NavMenuProps) {
  const handleScrollToView = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    if (!targetId) return;

    const scrollToTarget = () => {
      const header = document.querySelector(".site-header");
      const headerHeight = header?.clientHeight || 0;
      console.log("headerHeight:", headerHeight);

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      const targetPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = targetPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    setTimeout(scrollToTarget, 0);
  };

  return (
    <div {...props}>
      <NavigationMenu>
        <NavigationMenuList className={cn("flex-wrap gap-x-6", menuClass)}>
          {menu.map((menu, index) => (
            <React.Fragment key={index}>
              <NavigationMenuItem>
                <a
                  onClick={handleScrollToView}
                  href={`#${menu.toLowerCase()}`}
                  className="text-[1rem] leading-snug text-white transition-all duration-300 hover:text-primary"
                >
                  {menu}
                </a>
              </NavigationMenuItem>
            </React.Fragment>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default MainNav;
