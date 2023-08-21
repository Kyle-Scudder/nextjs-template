"use client";

import Link from "next/link";
import { IconHomeHeart } from "@tabler/icons-react";
import Logout from "./Logout";

export default function Topbar() {
	return (
    <nav className="topbar">
      <Link
        href="/"
        className="flex 
			items-center gap-4"
      >
        <IconHomeHeart
          stroke={1}
          strokeLinejoin="miter"
          height={28}
          width={28}
        />
        <p
          className="text-heading3-bold 
				text-light-1 max-xs:hidden"
        >
          PRJOECT_NAME
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden"></div>
			</div>
      <Logout placement="top" />
    </nav>
  );
}
