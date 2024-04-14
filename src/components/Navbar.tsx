"use client";
"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-20 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          {" "}
          <MenuItem
            item="Home"
            setActive={setActive}
            active={active}
          ></MenuItem>
        </Link>

        <Link href={"/pricing"}>
          {" "}
          <MenuItem
            item="Pricing"
            setActive={setActive}
            active={active}
          ></MenuItem>
        </Link>
        <Link href={"/Contactus"}>
          {" "}
          <MenuItem
            item="Contact"
            setActive={setActive}
            active={active}
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
