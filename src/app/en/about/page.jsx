import { ChevronRight, Facebook, Instagram, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="space-y-24">
      <div className="flex flex-col items-center justify-center relative">
        <Image
          src="/about.avif"
          height={500}
          width={1000}
          alt="about-header"
          className=""
        />
        <p className="text-9xl text-[#FD5948] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
          Ableton
        </p>
      </div>

      <div className="px-84 space-y-4">
        <p className="text-2xl font-semibold leading-relaxed">
          We make{" "}
          {
            <Link href="/en/live" className="text-[#0000FF]">
              Live
            </Link>
          }
          ,{" "}
          {
            <Link href="/en/push" className="text-[#0000FF]">
              Push
            </Link>
          }
          ,{" "}
          {
            <Link href="/en/note" className="text-[#0000FF]">
              Note
            </Link>
          }
          ,{" "}
          {
            <Link href="/en/move" className="text-[#0000FF]">
              Move
            </Link>
          }{" "}
          and{" "}
          {
            <Link href="/en/link" className="text-[#0000FF]">
              Link
            </Link>
          }{" "}
          — unique software and hardware for music creation and performance.
          With these products, our community of users creates amazing things.
        </p>
        <p className="text-base leading-relaxed">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>

      <div className="relative h-[780px]">
        <div className="h-[780px] w-[780px] bg-[#FBFFA7] absolute right-0"></div>
        <div className="w-full absolute flex items-start gap-24 px-24">
          <div className="w-[600px] h-[780px] overflow-hidden flex items-center">
            <Image
              src="/about-2.avif"
              width={600}
              height={780}
              alt="about-2"
              className="scale-130 object-cover"
            />
          </div>
          <div className="flex items-center h-[780px]">
            <Image src="/about-3.avif" height={500} width={500} alt="about-3" />
          </div>
        </div>
      </div>

      <div className="px-84 space-y-4">
        <p className="text-2xl font-semibold leading-relaxed">
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </p>
        <p className="text-base leading-relaxed">
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col items-start gap-4">
          <iframe
            width="683"
            height="384"
            src="https://www.youtube.com/embed/9SbnhgjeyXA"
            title="Why Ableton - Juanpe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="px-2 text-sm"> Why Ableton - Juanpe Bolivar</span>
        </div>
      </div>

      <div className="px-84 space-y-4">
        <p className="text-2xl font-semibold leading-loose">
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </p>
        <p className="text-base leading-relaxed">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </div>

      <div className="relative h-[1000px]">
        <div className="h-[1000px] w-[780px] bg-[#B6FFC0] absolute left-0"></div>
        <div className="w-full absolute flex items-start justify-between px-32">
          <div className="flex flex-col items-center justify-center gap-32 h-[1000px]">
            <Image src="/about-4.avif" height={500} width={500} alt="about-4" />
            <Image src="/about-5.avif" height={500} width={500} alt="about-5" />
          </div>

          <div className="w-[500px] h-[1000px] overflow-hidden flex items-center">
            <Image
              src="/about-6.avif"
              width={500}
              height={700}
              alt="about-6"
              className="scale-110 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-84 space-y-4">
        <p className="text-2xl font-semibold leading-loose">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </p>
        <p className="text-base leading-relaxed">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Image src="/about-7.avif" height={1000} width={1100} alt="about-7" />
      </div>

      <div className="px-84 space-y-4">
        <p className="text-2xl font-semibold leading-loose">
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </p>
        <p className="text-base leading-relaxed">
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <p className="text-base leading-relaxed">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </div>

      <div className="relative h-[780px]">
        <div className="h-[780px] w-[1000px] bg-[#D5B3FF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-full absolute flex items-start gap-64">
          <div className="flex items-center h-[780px] pl-24">
            <Image src="/about-8.avif" height={500} width={500} alt="about-3" />
          </div>
          <div className="w-[600px] h-[780px] overflow-hidden flex items-center">
            <Image
              src="/about-9.avif"
              width={600}
              height={780}
              alt="about-7"
              className="scale-145 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-84 space-y-4">
        <p className="text-2xl font-semibold leading-loose">
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </p>
        <p className="text-base leading-relaxed">
          If you're joining us in Berlin, we'll help with relocation and
          paperwork. We’ll even provide you with free German or English lessons.
          Plus, working in Germany means you can expect comprehensive health
          insurance for you and your family, as well as generous maternity and
          paternity leave. Office hours are flexible, but it’s not all work; we
          have several company and team outings throughout the year as well as a
          variety of fun, informal small-group activities.
        </p>
      </div>

      <div className="h-[600px] flex items-center justify-around px-24">
        <div className="w-[600px] h-[600px] relative overflow-hidden">
          <Image
            src="/about-10.avif"
            alt="about-10"
            fill
            className="object-cover object-right"
          />
        </div>
        <div className="bg-[#B1C5FF] w-[600px] h-[600px]">
          <div className="h-full flex items-center justify-center">
            <div className="flex flex-col px-32 text-2xl gap-8 font-semibold leading-loose">
              <span>
                We’re really proud of the work we’ve done so far. But there’s so
                much more to come. If you’d like to be a part of it, please join
                us.
              </span>
              <span>
                <Link
                  href="/en/jobs"
                  className="flex items-center gap-2 text-[#0000FF]"
                >
                  See Latest Jobs <ChevronRight />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[3px] bg-gray-400"></div>

      <div className="px-24">
        <h1 className="text-6xl font-semibold">Ableton</h1>

        <div className="grid grid-cols-[30%_30%_40%] w-full pt-16">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-16">
            <div className="space-y-1">
              <Link
                href="/en/account/add_license"
                className="flex items-center gap-1"
              >
                <span>Register Live, Push or Move</span>
                <ChevronRight height={16} width={16} />
              </Link>
              <Link href="/en/about" className="flex items-center gap-1">
                <span>About Ableton</span>
                <ChevronRight height={16} width={16} />
              </Link>
              <Link href="/en/jobs" className="flex items-center gap-1">
                <span>Jobs</span>
                <ChevronRight height={16} width={16} />
              </Link>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-2">
                {/* Facebook */}
                <a href="https://facebook.com/ableton" target="_blank">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#0866FF"
                  >
                    <path d="M24 12a12 12 0 10-13.875 11.85v-8.385H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.465h-2.796v8.385A12.001 12.001 0 0024 12z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a href="https://x.com/ableton" target="_blank">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
                    <path d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-5.35-6.993L3.5 22H1l6.96-7.96L2 2h6.828l4.84 6.35L18.244 2zM17.1 20h1.885L7.9 4H6.015L17.1 20z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a href="https://youtube.com/ableton" target="_blank">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#FF0000"
                  >
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/ableton" target="_blank">
                  <svg width="28" height="28" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient
                        id="ig"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#feda75" />
                        <stop offset="50%" stopColor="#d62976" />
                        <stop offset="100%" stopColor="#4f5bd5" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#ig)"
                      d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 5.5A4.75 4.75 0 1016.75 12 4.75 4.75 0 0012 7.5zm6.25-.88a1.12 1.12 0 11-1.12-1.12 1.12 1.12 0 011.12 1.12z"
                    />
                  </svg>
                </a>

                {/* TikTok */}
                <a href="https://tiktok.com/@ableton" target="_blank">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
                    <path d="M12.75 2h3.25a5.5 5.5 0 005.5 5.5v3.25a8.75 8.75 0 01-5.5-1.94v7.69a5.88 5.88 0 11-5.88-5.88c.29 0 .57.03.85.08v3.33a2.5 2.5 0 102.78 2.47V2z" />
                  </svg>
                </a>

                {/* Discord */}
                <a href="https://discord.com/invite/ableton" target="_blank">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#5865F2"
                  >
                    <path d="M20 4a17.3 17.3 0 00-4.3-1.3l-.2.4a16 16 0 00-5 0l-.2-.4A17.3 17.3 0 004 4a19 19 0 00-3 12 17.7 17.7 0 005.3 2.7l.4-.7a11.5 11.5 0 01-1.8-.9l.4-.3c3.5 1.6 7.3 1.6 10.8 0l.4.3a11.5 11.5 0 01-1.8.9l.4.7A17.7 17.7 0 0023 16 19 19 0 0020 4zM9.5 14.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold">Community</h3>
              <Link
                href="/en/community/user-groups"
                className="flex items-center gap-1"
              >
                <span>Find Ableton User Groups</span>
                <ChevronRight height={16} width={16} />
              </Link>
              <Link
                href="/en/certified-training"
                className="flex items-center gap-1"
              >
                <span>Find Certified Training</span>
                <ChevronRight height={16} width={16} />
              </Link>
              <Link
                href="/en/education/certification-program"
                className="flex items-center gap-1"
              >
                <span>Become a Certified Trainer</span>
                <ChevronRight height={16} width={16} />
              </Link>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-16">
            <div className="space-y-1">
              <h3 className="font-semibold">Education</h3>
              <Link
                href="/en/shop/education"
                className="flex items-center gap-1"
              >
                <span>Offers for students and teachers</span>
                <ChevronRight height={16} width={16} />
              </Link>
              <Link href="/en/classroom" className="flex items-center gap-1">
                <span>Ableton for the Classroom</span>
                <ChevronRight height={16} width={16} />
              </Link>
              <Link
                href="/en/colleges-universities"
                className="flex items-center gap-1"
              >
                <span>Ableton for Colleges and Universities</span>
                <ChevronRight height={16} width={16} />
              </Link>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Language & Location</h3>
              <div className="flex gap-2">
                <select className="bg-[#EEE] px-4 py-1 outline-none cursor-pointer">
                  <option>English</option>
                  <option>German</option>
                  <option>French</option>
                  <option>Japanese</option>
                  <option>Korean</option>
                  <option>Spanish</option>
                </select>
                <select className="bg-[#EEE] px-4 py-1 outline-none cursor-pointer">
                  <option>India</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>Japan</option>
                </select>
              </div>
            </div>
          </div>

          {/* COLUMN 3 (40%) */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Sign up to our newsletter</h3>
            <p className="pb-4">
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-1 flex-1 outline-none bg-[#EEE]"
              />
              <button className="bg-[#0000FF] text-white px-6 whitespace-nowrap">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-24 text-sm pb-24">
        <div className="flex gap-4">
          <Link href="/en/contact-us">Contact Us</Link>
          <Link href="/en/press">Press Resources</Link>
          <Link href="/en/legal">Legal Info</Link>
          <Link href="/en/corporate-information">Corporate Information</Link>
          <Link href="/en/privacy-policy">Privacy Policy</Link>
          <Link href="/en/cookie-settings">Cookie Settings</Link>
          <Link href="/en/imprint">Imprint</Link>
        </div>
        <div>Made in Berlin</div>
      </div>
    </div>
  );
};

export default About;
