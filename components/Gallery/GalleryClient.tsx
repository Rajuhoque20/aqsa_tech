
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import { Title } from "../Title";
import { useOrgContext } from "@/context/orgContext";
import { eventInfo } from "@/data/events";

export function GalleryClient() {
  const [slides, setSlides] = useState<React.ReactNode[]>([]);
  const data=useOrgContext();
  const events=data?.name?eventInfo[data?.name]??[]:[];

  useEffect(() => {
    const buildSlides = () => {
      const increment = window.innerWidth < 768 ? 1 : 3;
      const out: React.ReactNode[] = [];

      for (let i = 0; i < events.length; i += increment) {
        const chunk = events.slice(i, i + increment);
        out.push(
          <div key={`slide-${i}`} className="min-w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {chunk.map((event, idx) => (
              <div
                key={`${event.title}-${idx}`}
                className="p-5 flex flex-col gap-3 rounded-md"
                style={{ border: "1px solid rgba(0,0,0,0.2)" }}
              >
                <div className="relative h-[300px]">
                  <Image
                    src={event.image}
                    fill
                    alt={event.title ?? event.title ?? "event image"}
                    className="rounded-md"
                    style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.5)" }}
                  />
                </div>
                <h2 className="text-gray-700 font-semibold">{event.title}</h2>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        );
      }

      setSlides(out);
    };

    buildSlides();
    window.addEventListener("resize", buildSlides);
    return () => window.removeEventListener("resize", buildSlides);
  }, []);

  if (slides.length === 0) {
    // optional placeholder while first build runs
    return (
      <div className="w-full px-5">
        <Title>EVENTS</Title>
        <div className="py-10 text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full md:px-30 px-5 md:gap-10 gap-5 flex flex-col mt-10 md:mt-30">
      <Title>EVENTS</Title>
      <Carousel dataLength={slides.length} RenderedItem={slides} />
    </div>
  );
}
