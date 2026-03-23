import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="space-y-16">
      <div className="px-24">
        <h1 className="text-6xl font-semibold pt-16">Ableton</h1>

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
      <div className="flex justify-between px-24 text-sm pb-36 font-simibold">
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

export default Footer;
