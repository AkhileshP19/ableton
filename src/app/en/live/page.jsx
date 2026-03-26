import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Live = () => {
  return (
    <div className="space-y-28">
      <div className="relative flex items-center justify-start">
        <video
          src="/live/live-1.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[500px] object-cover"
        />
        <div className="w-[30%] absolute ml-24">
          <div className="flex flex-col">
            <span className="text-5xl text-white font-semibold leading-relaxed">
              Find
              {
                <span className="bg-white text-black rounded-full p-3 ml-2 mr-2">
                  yourself
                </span>
              }
              again and again in Ableton Live
            </span>
            <Link href="/en/shop/live">
              <button className="text-lg text-white bg-[#0000FF] w-fit px-7 py-2 hover:cursor-pointer">
                Buy now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-24 space-y-28">
        <div className="bg-[#B6FFC0] w-full p-28">
          <div className="flex flex-col items-start gap-4 font-semibold">
            <p className="text-2xl leading-relaxed">
              Live 12.4 is coming. A free update for all Live 12 users, it
              brings Link Audio, updated devices and more.
            </p>
            <Link
              href="/en/blog/live-12-4-is-coming"
              className="flex gap-1 items-center text-[#0000FF]"
            >
              <span>See what's new</span>
              <ChevronRight height={13} width={13} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-12">
          <p className="text-4xl font-semibold leading-relaxed">
            Get lost in Live 12’s creative features and sounds – and find your
            own way of making music
          </p>
          <iframe
            width="100%"
            height="800"
            src="https://www.youtube.com/embed/QFCV6EkqRQs"
            title="Ableton Live 12: Explore what’s new"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="-mt-10 text-sm ml-1">
            A look at some of the highlights of Live 12
          </span>
        </div>

        <div className="flex flex-col items-start justify-center gap-6 text-lg font-semibold">
          <p className="text-4xl font-semibold leading-relaxed">
            Find out what’s possible in Live 12
          </p>
          <div className="flex gap-4 text-[#0000FF]">
            <span className="text-black">Jump to: </span>
            <Link href="/live/#main-features">Play freely with ideas</Link>
            <Link href="/live/#sounds-and-packs">
              Surprise yourself with sounds
            </Link>
            <Link href="/live/#workflow">Work more intuitively</Link>
            <Link href="/live/#all-new-features">See all new features</Link>
          </div>
        </div>
      </div>

      <div className="bg-[#EBF0DC] px-24">
        <h1 className="text-5xl font-semibold py-20">Play freely with ideas</h1>
        <div className="flex flex-col gap-1 pb-16">
          <iframe
            width="100%"
            height="538"
            src="https://www.youtube.com/embed/z7kjcMvMr3M"
            title="Ableton Live 12: MIDI Tools"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="text-sm ml-1">
            A demonstration of the new MIDI Tools
          </span>
        </div>

        <div>
          <div className="flex justify-between gap-24">
            <div className="space-y-4 flex-1">
              <h4 className="font-semibold text-2xl">Reshape MIDI patterns</h4>
              <p className="text-base leading-loose">
                Apply a variety of simple or complex variations to your MIDI
                clips with new MIDI Transformations. Add ornaments and
                articulations, draw acceleration and deceleration curves,
                connect successive notes and chords, simulate the strum of a
                guitar, and more.
              </p>
            </div>
            <div className="space-y-4 flex-1">
              <h4 className="font-semibold text-2xl">Generate Inspiration</h4>
              <p className="text-base leading-loose">
                Conjure up melodies, chords and rhythms with the help of new
                MIDI Generators. Set constraints and let your chosen Generator
                create playful and original ideas for you to develop and turn
                into your own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
