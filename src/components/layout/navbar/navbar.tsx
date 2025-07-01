"use client";
import React, { useState } from "react";
import DesktopNav, { NavbarLogo } from "./desktop-nav";
import { NavBody } from "./nav-body";
import { NavItems } from "./nav-items";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { MobileNav } from "./mobile-nav";
import { MobileNavHeader } from "./mobile-nav-header";
import { MobileNavToggle } from "./mobile-nav-toggle";
import { MobileNavMenu } from "./mobile-nav-menu";
import { Separator } from "@/components/ui/shadcn/separator";

export const Navbar = () => {
  const navItems = [
    {
      name: "Dashboard",
      link: "#features",
    },
    {
      name: "New Entry",
      link: "#pricing",
    },
    {
      name: "My Entries",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <DesktopNav>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex w-full gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>James Esguerra</span>
          </div>

          <Separator className="my-4" />

          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}

          <Separator className="my-2" />
        </MobileNavMenu>
      </MobileNav>
    </DesktopNav>
  );
};
