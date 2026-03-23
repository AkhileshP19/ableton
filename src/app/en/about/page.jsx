import Footer from "@/components/footer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="space-y-24">
      <div className="flex flex-col items-center justify-center relative">
        <Image
          src="/about/about.avif"
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
              src="/about/about-2.avif"
              width={600}
              height={780}
              alt="about-2"
              className="scale-130 object-cover"
            />
          </div>
          <div className="flex items-center h-[780px]">
            <Image src="/about/about-3.avif" height={500} width={500} alt="about-3" />
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
            <Image src="/about/about-4.avif" height={500} width={500} alt="about-4" />
            <Image src="/about/about-5.avif" height={500} width={500} alt="about-5" />
          </div>

          <div className="w-[500px] h-[1000px] overflow-hidden flex items-center">
            <Image
              src="/about/about-6.avif"
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
        <Image src="/about/about-7.avif" height={1000} width={1100} alt="about-7" />
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
            <Image src="/about/about-8.avif" height={500} width={500} alt="about-3" />
          </div>
          <div className="w-[600px] h-[780px] overflow-hidden flex items-center">
            <Image
              src="/about/about-9.avif"
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
            src="/about/about-10.avif"
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

      {/* separator */}
      <div className="w-full h-[1px] bg-gray-200"></div>

      <Footer />

    </div>
  );
};

export default About;
