"use client"

import { Menu, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const pathname = usePathname(); // "/en/about"
  const page = pathname.split("/").pop();
  console.log(page);

function decideClassName(currentPage) {
    if (currentPage === page) return "text-[#D34312]";
    return "";
  }
  return (
    <div className="flex justify-between p-8 font-semibold border-b border-gray-200">
      <div className="flex gap-4">
        <div className="flex">
          <Menu />
        </div>
        <div>
          <div className="flex gap-6">
            <Link href="/en/live" className={`${decideClassName("live")}`}>Live</Link>
            <Link href="/en/push" className={`${decideClassName("push")}`}>Push</Link>
            <Link href="/en/move" className={`${decideClassName("move")}`}>Move</Link>
            <Link href="/en/note" className={`${decideClassName("note")}`}>Note</Link>
            <Link href="/en/link" className={`${decideClassName("link")}`}>Link</Link>
            <Link href="/en/shop" className={`${decideClassName("shop")}`}>Shop</Link>
            <Link href="/en/packs" className={`${decideClassName("packs")}`}>Packs</Link>
            <Link href="/en/help" className={`${decideClassName("help")}`}>Help</Link>
            <Link href="" className="text-[#D34312]">
              More +
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className="text-xl text-blue-600 font-semibold">
          <Link href="">Try Live 12 for Free</Link>
        </div>
        <div>Login or Register</div>
      </div>
    </div>
  );
};

export default MainHeader;
