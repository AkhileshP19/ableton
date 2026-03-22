"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutSubHeader = () => {
  const pathname = usePathname(); // "/en/about"
  const page = pathname.split("/").pop();
  console.log(page);

  function decideClassName(currentPage) {
    if (currentPage === page) return "text-[#D34312]";
    return "";
  }
  return (
    <div className="px-8">
      <ul className="flex gap-8 font-semibold">
        <li>
          <Link
            href="/en/about"
            className={`${page === "about" ? "text-[#D34312]" : ""}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link href="/en/jobs" className={`${decideClassName("jobs")}`}>
            Jobs
          </Link>
        </li>
        <li>
          <Link
            href="/en/ausbildung"
            className={`${decideClassName("ausbildung")}`}
          >
            Apprenticeship
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutSubHeader;
