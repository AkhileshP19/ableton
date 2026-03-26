"use client";

import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { useState } from "react";
import { Minus } from "lucide-react";

const Live = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value) => {
    setOpenItem(openItem === value ? null : value);
  };
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

        <div className="space-y-24">
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
              <h4 className="font-semibold text-2xl">Generate inspiration</h4>
              <p className="text-base leading-loose">
                Conjure up melodies, chords and rhythms with the help of new
                MIDI Generators. Set constraints and let your chosen Generator
                create playful and original ideas for you to develop and turn
                into your own.
              </p>
            </div>
          </div>

          <div className="space-y-48">
            <div className="flex items-center justify-center w-full gap-36 px-24">
              <Image
                src="/live/live-2.png"
                height={200}
                width={400}
                alt="live-2"
                className="flex-1"
              />
              <div className="flex flex-col flex-1 space-y-4">
                <h4 className="font-semibold text-2xl">
                  Do more with Max for Live
                </h4>
                <p className="text-base leading-loose">
                  Try out additional Max for Live Transformations and Generators
                  that give you deeper ways of working with MIDI, or go even
                  further by building new ones.
                </p>
              </div>
            </div>

            <div className="flex items-center w-full gap-48">
              <div className="flex flex-col space-y-4 w-[30%] p-2">
                <h4 className="font-semibold text-2xl">
                  Embrace and explore tunings
                </h4>
                <p className="text-base leading-loose">
                  Follow your preferred tuning systems or try different ones
                  more easily. Work outside of 12-tone equal temperament, and
                  use your tuning with Live’s devices as well as any MPE-capable
                  plugin or hardware.
                </p>
              </div>
              <div className="flex-1 -mx-24">
                <iframe
                  width="100%"
                  height="535"
                  src="https://www.youtube.com/embed/5-ZldZ5WhSM"
                  title="Ableton Live 12: Tuning Systems"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <span className="mt-1 text-sm ml-1">
                  See how to work with tuning systems in Live
                </span>
              </div>
            </div>

            <div className="flex items-center w-full gap-48">
              <div className="flex-1 -mx-24">
                <iframe
                  width="100%"
                  height="535"
                  src="https://www.youtube.com/embed/u6IpJYpN48A"
                  title="Ableton Live 12: Keys and Scales"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <span className="mt-1 text-sm ml-1">
                  A quick look at the new Keys and Scales feature
                </span>
              </div>
              <div className="flex flex-col space-y-4 w-[30%] p-2">
                <h4 className="font-semibold text-2xl">Stay in key</h4>
                <p className="text-base leading-loose">
                  Transform or generate ideas within the confines of the
                  selected scale, or sync the scale of MIDI devices and
                  instruments to the clip being played.
                </p>
              </div>
            </div>

            <div className="space-y-36">
              <div className="flex items-center justify-center w-full gap-36 px-24">
                <Image
                  src="/live/live-3.png"
                  height={200}
                  width={400}
                  alt="live-3"
                  className="flex-1"
                />
                <div className="flex flex-col flex-1 space-y-4">
                  <h4 className="font-semibold text-2xl">
                    Edit MIDI more easily
                  </h4>
                  <p className="text-base leading-loose">
                    Use keyboard and mouse operations to edit MIDI in new ways.
                    Split a note in two, or chop it into several parts. Select a
                    set of notes and join them together, or make them fill a
                    selected time range. Plus, you can access to more tools from
                    the Note Utilities panel on the left, such as Fit to Scale,
                    Humanize, Add Intervals, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center w-full gap-36 px-24">
                <Image
                  src="/live/live-4.png"
                  height={200}
                  width={400}
                  alt="live-4"
                  className="flex-1"
                />
                <div className="flex flex-col flex-1 space-y-4">
                  <h4 className="font-semibold text-2xl">
                    Modulate more flexibly
                  </h4>
                  <p className="text-base leading-loose">
                    Stay in control of a parameter, even after it’s been mapped
                    to a modulation source; Max for Live devices like LFO,
                    Shaper and Envelope Follower now let you freely adjust a
                    destination that’s being modulated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-24 space-y-24">
        <h1 className="text-[78px] font-semibold">
          Surprise yourself with the sounds you create
        </h1>

        <div className="flex items-center w-full gap-48">
          <div className="flex flex-col space-y-4 w-[30%] p-2">
            <h4 className="font-semibold text-2xl">Find inspiration</h4>
            <p className="text-base leading-loose">
              Start playing with any of Live’s new instruments and effects and
              you’ll soon find new textures and techniques to spark further
              experimentation.
            </p>
          </div>
          <div className="flex-1 -mx-24">
            <iframe
              width="951"
              height="535"
              src="https://www.youtube.com/embed/ncdNTdzBK4Y"
              title="Live 12: Get to know the new devices"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <span className="mt-1 text-sm ml-1">
              Take a look at the new devices in Live 12
            </span>
          </div>
        </div>

        <div className="space-y-12">
          <div className="space-y-6 w-[55%]">
            <h2 className="text-3xl font-semibold pb-2">
              Lose yourself in Meld
            </h2>
            <p className="text-lg leading-loose">
              Live’s new MPE-capable synthesizer is designed for sound variety,
              playfulness and character. Equipped with two independent
              oscillators and an extensive modulation matrix, Meld excels at
              textural soundscapes, harmonic and atonal sounds, and rhythmic
              drones.
            </p>
            <p className="text-lg leading-loose">
              Meld’s Macro Oscillators provides simple access of complex
              waveforms made by various synthesis methods. Quickly dial up
              subtractive, FM, granular, and other sources, quantize the
              oscillators to a scale and even use the LFOs from one oscillator
              to modulate the other.
            </p>
          </div>

          <div>
            <Image
              src="/live/live-5.png"
              width={900}
              height={600}
              alt="live-5"
            />
            <span className="text-sm ml-1">
              Program Meld’s dual oscillators with dedicated LFOs and an
              extensive modulation matrix
            </span>
          </div>

          <div>
            <Image
              src="/live/live-6.png"
              width={900}
              height={300}
              alt="live-6"
            />
            <span className="text-sm ml-1">
              Each of Meld’s oscillator presets comes with two Engines
              parameters, carefully chosen for maximum sound design versatility
            </span>
          </div>

          <div className="flex flex-col items-start w-[40%] gap-2">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&visual=false"
            ></iframe>
            <span className="text-sm ml-1">
              Listen to more sounds from Meld
            </span>
          </div>

          <div className="space-y-6 w-[55%]">
            <h2 className="text-3xl font-semibold pb-2">Add color with Roar</h2>
            <p className="text-lg leading-loose">
              Bathe your sound in subtle warmth – or break it down with wild
              distortion. Live’s new coloring and saturation device is made up
              of three saturation stages for serial, parallel or even mid/side
              and multiband configurations. Its built-in compressor and feedback
              routing give you even more ways to shape your sound, and its
              modulation section lets you add dynamic, evolving saturation and
              color.
            </p>
          </div>

          <div>
            <Image
              src="/live/live-7.png"
              width={650}
              height={500}
              alt="live-7"
            />
            <span className="text-sm ml-1">
              Apply heavy distortion to a specific frequency range with Roar’s
              multiband configuration
            </span>
          </div>

          <div>
            <Image
              src="/live/live-8.png"
              width={950}
              height={300}
              alt="live-8"
            />
            <span className="text-sm ml-1">
              Modulate your sound with Roar’s Envelope Follower
            </span>
          </div>

          <div className="w-full">
            <AccordionPrimitive.Root
              type="single"
              collapsible
              value={openItem}
              onValueChange={(val) => setOpenItem(val)}
              className="w-full"
            >
              <AccordionPrimitive.Item value="roar">
                <AccordionPrimitive.Trigger className="w-full">
                  <div className="flex items-center justify-center w-full text-blue-600 font-semibold text-3xl p-4 border-2 border-blue-600">
                    {openItem === "roar" ? (
                      <Minus className="mr-2" />
                    ) : (
                      <Plus className="mr-2" />
                    )}
                    <span>Discover more Roar sounds</span>
                  </div>
                </AccordionPrimitive.Trigger>
                <AccordionPrimitive.Content>
                  <div className="space-y-8">
                    <div>
                      <Image
                        src="/live/live-20.png"
                        width={1000}
                        height={600}
                        alt="live-20 accordion-1"
                      />
                      <span className="text-sm ml-1">
                        Process a beat in Serial mode to add two separate layers
                        of saturation, one after the other
                      </span>
                    </div>
                    <div>
                      <Image
                        src="/live/live-21.png"
                        width={1000}
                        height={600}
                        alt="live-21 accordion-2"
                      />
                      <span className="text-sm">
                        See what happens when you use Roar’s Feedback panel to
                        distort your signal further
                      </span>
                    </div>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            </AccordionPrimitive.Root>
          </div>

          <div className="space-y-6 w-[55%]">
            <h2 className="text-3xl font-semibold pb-2">
              Get expressive with granular synthesis
            </h2>
            <p className="text-lg leading-loose">
              Granulator III, the latest version of Robert Henke’s granular
              synthesizer, introduces expressive control that lets you bend
              notes and add vibrato and glissando. Plus, you can now capture
              audio in real time and start manipulating it immediately.
            </p>
          </div>

          <div>
            <Image
              src="/live/live-9.png"
              width={650}
              height={500}
              alt="live-7"
            />
            <span className="text-sm ml-1">
              Apply heavy distortion to a specific frequency range with Roar’s
              multiband configuration
            </span>
          </div>

          <div>
            <Image
              src="/live/live-10.png"
              width={950}
              height={300}
              alt="live-8"
            />
            <span className="text-sm ml-1">
              Modulate your sound with Roar’s Envelope Follower
            </span>
          </div>

          <div className="w-full">
            <AccordionPrimitive.Root
              type="single"
              collapsible
              value={openItem}
              onValueChange={(val) => setOpenItem(val)}
              className="w-full"
            >
              <AccordionPrimitive.Item value="roar">
                <AccordionPrimitive.Trigger className="w-full">
                  <div className="flex items-center justify-center w-full text-blue-600 font-semibold text-3xl p-4 border-2 border-blue-600">
                    {openItem === "roar" ? (
                      <Minus className="mr-2" />
                    ) : (
                      <Plus className="mr-2" />
                    )}
                    <span>Discover more Roar sounds</span>
                  </div>
                </AccordionPrimitive.Trigger>
                <AccordionPrimitive.Content>
                  <div className="space-y-8">
                    <div>
                      <Image
                        src="/live/live-22.png"
                        width={1000}
                        height={600}
                        alt="live-22 accordion-1"
                      />
                      <span className="text-sm ml-1">
                        Process a beat in Serial mode to add two separate layers
                        of saturation, one after the other
                      </span>
                    </div>
                    <div>
                      <Image
                        src="/live/live-23.png"
                        width={1000}
                        height={600}
                        alt="live-23 accordion-2"
                      />
                      <span className="text-sm">
                        See what happens when you use Roar’s Feedback panel to
                        distort your signal further
                      </span>
                    </div>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            </AccordionPrimitive.Root>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
