import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const Apprenticeships = () => {
  return (
    <div>
      <div className="px-24 py-24 w-[65%] space-y-8">
        <h1 className="text-5xl font-semibold">Apprenticeships at Ableton</h1>
        <h4 className="text-2xl font-semibold">
          What are they and what do you need to get started?
        </h4>
        <p className="text-base leading-loose">
          Dual apprenticeship programs have a long tradition in Germany, and
          they play an important role in the country’s economy. The programs are
          a proven stepping stone towards a meaningful career without the need
          for a university degree. They give you the chance to apply theoretical
          knowledge learned in a vocational school to tasks in the workplace,
          while you divide your time between class and office days.
        </p>
        <Image
          src="/apprenticeship/apprenticeship-1.jpg"
          height={1500}
          width={700}
          alt="apprenticeship-1"
        />
        <p className="text-base leading-loose">
          At Ableton, you'll work towards the Office Management Assistant
          apprenticeship over two and a half years, developing your professional
          and personal skills in different teams. We look for people who are
          highly motivated to work in a commercial office environment, with an
          excellent level of German and very good English. It’s important that
          you’re eager to learn, organized in your work, and communicative when
          collaborating with others. Plus, you should be ready to get the most
          out of your development through giving and receiving feedback. You can
          expect a relaxed, professional atmosphere with a dynamic team of
          people who love music in return.
        </p>
        <p className="text-base leading-loose">
          If this sounds like you, feel free to have a look at our detailed
          information in German{" "}
          {
            <Link
              href="https://www.ableton.com/de/ausbildung/"
              className="text-[#0000FF]"
            >
              here
            </Link>
          }
          . And please share this page with anyone who might be interested to
          help us find our future colleagues!
        </p>
        <Image
          src="/apprenticeship/apprenticeship-2.jpg"
          height={900}
          width={700}
          alt="apprenticeship-1"
        />
      </div>

      <div className="w-full h-[1px] bg-gray-200"></div>

      <Footer />
    </div>
  );
};

export default Apprenticeships;
