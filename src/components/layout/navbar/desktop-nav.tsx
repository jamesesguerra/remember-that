"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

import { NavbarProps } from "@/types/ui/navbar/navbar.types";

const DesktopNav = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-5 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src={"https://assets.aceternity.com/logo-dark.png"}
        alt="Logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">
        RememberThat
      </span>
    </a>
  );
};

export default DesktopNav;
