import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-full">
        <div className="flex w-full items-end justify-between gap-16 text-white font-semibold">
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
                <span className="flex gap-2 items-center text-xl underline">
                  See what's new <ChevronRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link href="/en/blog/watch-modeselektor-break-down-a-track">
              <div>
                <Image
                  src="/landing/landing-2.avif"
                  height={300}
                  width={500}
                  alt="landing-2"
                />
              </div>
              <div className="space-y-2 text-[#B1C5FF] absolute top-4 py-4 px-8 leading-relaxed">
                <span className="text-[28px]">
                  Watch Modeselektor Break Down a Track
                </span>
                <span className="flex gap-2 items-center text-lg underline">
                  Check out the video <ChevronRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative bottom-20 ml-140">
          <div className="relative">
            <Link href="/en/blog/begineers-guide-to-chords-bass-melodies">
              <div>
                <Image
                  src="/landing/landing-3.avif"
                  height={300}
                  width={500}
                  alt="landing-3"
                />
              </div>
              <div className="space-y-2 text-[#FBFFA7] absolute top-4 py-4 px-8 max-w-[600px] font-semibold leading-relaxed">
                <span className="text-[29px]">
                  Kickstart Fresh Ideas with MIDI Effects
                </span>
                <span className="flex gap-2 items-center text-base underline">
                  Watch the Video <ChevronRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-24">
        <div className="flex justify-between items-center font-semibold">
          <h1 className="text-2xl">The Latest from Ableton</h1>
          <div className="flex text-[#0000FF] gap-4 text-lg">
            <Link href="/en/blog">All posts</Link>
            <Link href="/en/blog/categories/artists">Artists</Link>
            <Link href="/en/blog/categories/news">News</Link>
            <Link href="/en/blog/categories/downloads">Downloads</Link>
            <Link href="/en/blog/categories/tutorials">Tutorials</Link>
            <Link href="/en/blog/categories/videos">Videos</Link>
            <Link href="/en/blog/categories/loop">Loops</Link>
          </div>
        </div>

        <div className="font-semibold flex justify-between py-12">
          <div className="flex">
            <div className="flex flex-col">
              <Link href="/en/blog/input-output-sakura-tsuruta">
                <Image
                  src="/landing/landing-4.jpg"
                  height={300}
                  width={300}
                  alt="landing-4"
                />
              </Link>
              <Link href="/en/blog/categories/downloads" className="mt-3">
                <span className="p-1 bg-[#FF8389] w-fit text-sm">
                  Downloads
                </span>
              </Link>
              <Link href="/en/blog/input-output-sakura-tsuruta">
                <span>Input / Output: Sakura Tsuruta</span>
              </Link>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <Link href="/en/blog/input-output-sakura-tsuruta">
                <Image
                  src="/landing/landing-5.jpg"
                  height={300}
                  width={300}
                  alt="landing-5"
                />
              </Link>
              <Link href="/en/blog/categories/downloads" className="mt-3">
                <span className="p-1 bg-[#FF8389] w-fit text-sm">
                  Downloads
                </span>
              </Link>
              <Link href="/en/blog/input-output-sakura-tsuruta">
                <span>Input / Output: Sakura Tsuruta</span>
              </Link>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <Link href="/en/blog/input-output-sakura-tsuruta">
                <Image
                  src="/landing/landing-6.jpg"
                  height={300}
                  width={300}
                  alt="landing-6"
                />
              </Link>
              <Link href="/en/blog/categories/downloads" className="mt-3">
                <span className="p-1 bg-[#FF8389] w-fit text-sm">
                  Downloads
                </span>
              </Link>
              <Link href="/en/blog/input-output-sakura-tsuruta">
                <span>Input / Output: Sakura Tsuruta</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
