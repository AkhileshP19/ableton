import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="absolute w-full">
        <div className="flex w-full items-end justify-between text-white font-semibold">
          <div className="relative">
            <Link href="/en/blog/live-12-4-is-coming">
              <div>
                <Image
                  src="/landing/landing-1.avif"
                  height={650}
                  width={900}
                  alt="landing-1"
                />
              </div>
              <div className="absolute top-0 p-16 leading-relaxed">
                <span className="text-[48px]">
                  Live 12.4 is coming – with Link Audio, updated devices and
                  more
                </span>
                <span className="flex gap-2 items-center text-xl underline">See what's new <ChevronRight /></span>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/en/blog/live-12-4-is-coming">
              <div>
                <Image
                  src="/landing/landing-2.avif"
                  height={300}
                  width={500}
                  alt="landing-2"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="relative bottom-20 left-170">
          <Link href="/en/blog/live-12-4-is-coming">
            <div>
              <Image
                src="/landing/landing-3.avif"
                height={300}
                width={500}
                alt="landing-3"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
