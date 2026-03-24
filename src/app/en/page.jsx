import Footer from "@/components/footer";
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
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-center font-semibold">
              <h1 className="text-3xl">The Latest from Ableton</h1>
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
                  <Link
                    href="/en/blog/input-output-sakura-tsuruta"
                    className="mt-1"
                  >
                    <span>Input / Output: Sakura Tsuruta</span>
                  </Link>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col">
                  <Link href="/en/blog/oliver-crosby-studio">
                    <Image
                      src="/landing/landing-5.jpg"
                      height={300}
                      width={300}
                      alt="landing-5"
                    />
                  </Link>
                  <Link href="/en/blog/categories/videos" className="mt-3">
                    <span className="p-1 bg-[#B1C5FF] w-fit text-sm">
                      Videos
                    </span>
                  </Link>
                  <Link href="/en/blog/oliver-crosby-studio" className="mt-1">
                    <span>Take a Tour of Oliver Crosby’s L.A. Studio</span>
                  </Link>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col">
                  <Link href="/en/blog/disiniblud-experiments-in-pop">
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
                  <Link
                    href="/en/blog/disiniblud-experiments-in-pop"
                    className="mt-1"
                  >
                    <span>Disiniblud: Experiments in Pop</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center font-semibold">
              <h1 className="text-3xl">Free Downloads</h1>
              <div className="flex text-[#0000FF] gap-4 text-lg">
                <Link href="/en/blog" className="flex gap-2 items-center">
                  Discover more <ChevronRight />
                </Link>
              </div>
            </div>

            <div className="font-semibold flex justify-between py-12">
              <div className="flex">
                <div className="flex flex-col w-[300px]">
                  <Link href="/en/blog/flava-d-evolution-of-a-producer-interview/">
                    <Image
                      src="/landing/landing-7.avif"
                      height={300}
                      width={300}
                      alt="landing-7"
                      className="mb-4"
                    />
                    <span>
                      Explore the Live Set of Flava D’s track “Blackwall Tunnel”
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col w-[300px]">
                  <Link href="/en/blog/brendon-moeller-life-begins-at-170/">
                    <Image
                      src="/landing/landing-8.avif"
                      height={300}
                      width={300}
                      alt="landing-8"
                      className="mb-4"
                    />
                    <span>
                      Dig into Brendon Moeller’s dub-flavored sample pack
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col w-[300px]">
                  <Link href="/en/blog/james-holden-waclaw-zimpel/">
                    <Image
                      src="/landing/landing-9.avif"
                      height={300}
                      width={300}
                      alt="landing-9"
                      className="mb-4"
                    />
                    <span>
                      Try out James Holden & Wacław Zimpel’s Pitch Gate device
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center font-semibold">
              <h1 className="text-3xl">Move in Focus</h1>
            </div>

            <div className="font-semibold flex justify-between py-12">
              <div className="flex">
                <div className="flex flex-col w-[300px]">
                  <Link href="/en/blog/explore-move-creative-updates-with-matt-wilde/">
                    <Image
                      src="/landing/landing-10.avif"
                      height={260}
                      width={260}
                      alt="landing-10"
                      className="mb-4"
                    />
                    <span>Explore Move’s Creative Updates with Matt Wilde</span>
                  </Link>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col w-[300px]">
                  <Link href="/en/blog/jamie-blake-move-sampling/">
                    <Image
                      src="/landing/landing-11.avif"
                      height={300}
                      width={300}
                      alt="landing-11"
                      className="mb-4"
                    />
                    <span>Flip Samples from Your Phone with Move</span>
                  </Link>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col w-[300px]">
                  <Link href="/en/blog/move-q-and-a/">
                    <Image
                      src="/landing/landing-12.avif"
                      height={300}
                      width={300}
                      alt="landing-12"
                      className="mb-4"
                    />
                    <span>Your Move Questions, Answered</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-[300px] flex items-center pb-12 pt-12">
          <div className="w-full h-[150px] bg-gray-200 flex items-center justify-center font-semibold">
            <div className="flex  text-[#0000FF] gap-4 text-xl">
              <span className="text-black">More: </span>
              <Link href="/en/blog">All posts</Link>
              <Link href="/en/blog/categories/artists">Artists</Link>
              <Link href="/en/blog/categories/news">News</Link>
              <Link href="/en/blog/categories/downloads">Downloads</Link>
              <Link href="/en/blog/categories/tutorials">Tutorials</Link>
              <Link href="/en/blog/categories/videos">Videos</Link>
              <Link href="/en/blog/categories/loop">Loops</Link>
              <Link href="/en/blog/categories/one-thing">One Thing</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
