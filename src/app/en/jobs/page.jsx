import Footer from "@/components/footer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Jobs = () => {
  return (
    <div>
      <div className="px-16">
        <div className="relative flex items-center justify-center">
          <Image
            src="/jobs/jobs-1.avif"
            height={1000}
            width={1000}
            alt="jobs-1"
          />

          <div className="absolute text-8xl font-semibold text-[#00FFFF]">
            <span>Jobs at Ableton</span>
          </div>
        </div>
      </div>

      <div className="px-84 space-y-4 py-24">
        <p className="text-2xl font-semibold leading-loose">
          Working at Ableton means being a part of creating products that shape
          the future of music culture in a dynamic and diverse environment
        </p>
        <p className="text-base leading-loose">
          Here at Ableton, we come from a wide range of cultural and
          professional backgrounds. We work hard to foster an environment in
          which people can grow both personally and professionally. We believe
          that diverse groups of people make better teams. We’re committed to
          increasing diversity in our workplace and providing equal opportunity
          throughout our recruitment process. Because of this we ask that you do
          not include a picture in your application documents. Thank you very
          much for your understanding.
        </p>
        <p className="text-base leading-loose">
          If you want to apply for one of our open positions, we would be happy
          to receive your application through our application form. Please
          upload all necessary documents there.
        </p>
        <div className="py-6 space-y-4">
          <h3 className="font-semibold text-xl">Commerce</h3>
          <Link href="/de/jobs/apply/1515248/" className="space-y-1">
            <span className="text-[#0000FF] flex items-center gap-1">
              Ausbildung zur/zum Kauffrau/-mann für Büromanagement (d/w/m)
              <ChevronRight height={12} width={12} />
            </span>
            <span>Ableton AG / Germany</span>
          </Link>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200"></div>

      <Footer />
    </div>
  );
};

export default Jobs;
